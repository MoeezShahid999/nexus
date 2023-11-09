import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { useEffect, useRef, useState } from "react";

const ScrollDialog = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const { text, name, categories } = data;
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <span style={{ fontSize: "12px" }} onClick={handleClickOpen("paper")}>
        Learn More
      </span>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          <h3>{name}</h3>
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <p>{text}</p>
          </DialogContentText>
          {categories?.map((el) => {
            return el?.subCategories ? (
              <>
                <h4 style = {{textDecoration:'underline'}}>{el.heading}</h4>
                {el.subCategories.map((el_sub) => (
                  <p style={{marginLeft:'2vw'}}>
                    <h5>{el_sub.heading}</h5>
                    <p style={{ color: "rgba(0, 0, 0, 0.54)" }}>
                      {el_sub.description}
                    </p>
                  </p>
                ))}
              </>
            ) : (
              <>
                <p>
                  <h5>{el.heading}</h5>
                  <p style={{ color: "rgba(0, 0, 0, 0.54)" }}>
                    {el.description}
                  </p>
                </p>
              </>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ScrollDialog;
