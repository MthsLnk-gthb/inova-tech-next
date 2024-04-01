import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";
import styles from '@/styles/components/redirectbutton.module.scss'

interface RedirectButtonProps{
    destinyRoute: string
    buttonContent: string
}

const RedirectButton = ({destinyRoute, buttonContent}: RedirectButtonProps) => {
  return (
    <Link href={destinyRoute}>
      <Button className={styles.button}>{buttonContent}</Button>
    </Link>
  );
};

export default RedirectButton;
