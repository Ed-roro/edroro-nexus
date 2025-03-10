"use client";

import Link from "next/link";
import { Modal, Stack, styled, Typography as Type } from "@mui/material";
import { Button } from "@/components/Button";

const Card = styled(Stack)`
  backdrop-filter: blur(15px);
  background-color: ${({ theme }) => theme.palette.background.transparent};
  border-radius: 1rem;
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  left: 50%;
  padding: 1rem;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
  width: 100%;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const Dialog = ({ open, close, link }) => (
  <Modal open={open} onClose={close}>
    <Card direction="column" spacing={3}>
      <Type variant="h4">Confirm Redirect</Type>
      <Type variant="body1">
        You have selected to be redirected to a non-bank website. To confirm,
        select &quot;OK&quot;. Click &quot;Cancel&quot; to close this alert.
        <br />
        <br />
        <em>
          We do not control the content of these sites. Please review their
          Privacy Policy as it may differ from our{" "}
          <Link href="/privacy-policy" onClick={close}>
            Privacy Policy
          </Link>
          .
        </em>
      </Type>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        spacing={2}
      >
        <Button size="small" onClick={close} secondary outlined>
          Cancel
        </Button>
        <Button size="small" onClick={close} component={Link} {...link}>
          OK
        </Button>
      </Stack>
    </Card>
  </Modal>
);

export default Dialog;