import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";

interface RedirectButtonProps{
    destinyRoute: string
    buttonContent: string
}

const RedirectButton = ({destinyRoute, buttonContent}: RedirectButtonProps) => {
  return (
    <Link href={destinyRoute}>
      <Button>{buttonContent}</Button>
    </Link>
  );
};

export default RedirectButton;
