"use client";

import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const FormContato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSendEmail = (e) => {
    e.preventDefault();

    if (!nome || !email || !mensagem) {
      alert("Você deve preencher todos os campos");
      return;
    }

    const templateParams = {
      from_name: nome,
      message: mensagem,
      email: email,
    };

    emailjs
      .send(
        "service_fh0onoc",
        "template_ezrtmrf",
        templateParams,
        "5oYB_gOww4fJV9J2-"
      )
      .then(
        (response) => {
          console.log("Email enviado", response.status, response.text);
          setNome("");
          setEmail("");
          setMensagem("");
        },
        (err) => {
          alert("Falha ao enviar o email", err);
        }
      );
  };

  return (
    <Form
      style={{ color: "#fff", maxWidth: "50dvw" }}
      onSubmit={handleSendEmail}
    >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Seu Nome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Seu Nome"
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Seu Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="email@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensagem</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          onChange={(e) => setMensagem(e.target.value)}
          value={mensagem}
        />
      </Form.Group>
      <Button type="submit">Enviar</Button>
    </Form>
  );
};

export default FormContato;
