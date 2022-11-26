import Alert from "./components/Alert";
import Button from "./components/Button";

import { useState } from "react";

function App() {
  const [isOpenedAlert, setOpenedAlert] = useState(false);

  const handleOpen = () => setOpenedAlert(true);

  const handleClose = () => setOpenedAlert(false);

  return (
    <>
      <Button color="primary">Primary button</Button>
      <Button color="primary" size="large">
        Primary large button
      </Button>
      <Button color="secondary">Secondary button</Button>
      <Button color="secondary" size="small">
        Secondary small button
      </Button>
      <Button disabled>Disabled button</Button>
      <Button color="secondary" disabled>
        Disabled secondary button
      </Button>

      <button onClick={handleOpen}>Open alert</button>

      {isOpenedAlert && (
        <Alert color="primary" onClose={handleClose}>
          Some text
        </Alert>
      )}
    </>
  );
}

export default App;
