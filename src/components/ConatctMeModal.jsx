
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
import emailjs from "emailjs-com";
import Alert from "@mui/material/Alert";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_ID);

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",  
  maxWidth: 900,  
  height: "auto",  
  bgcolor: "#171716",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 2,
  "@media (max-width: 600px)": {
    width: "90%",  
    height: "auto",  
    padding: "16px",  
  },
};

export default function ContactMeModal({ open, handleClose }) {

  const [formData, setFormData] = React.useState({
    email: "",
    subject: "",
    content: "",
  });

  const [successMsg, setSuccessMsg] = React.useState(false);

  const formRef = React.useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Use service ID from .env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Use template ID from .env
        formRef.current, // Pass the form element reference
        import.meta.env.VITE_EMAILJS_PUBLIC_ID // Use public ID from .env
      )
      .then(
        (result) => {
          setSuccessMsg(true);
          setTimeout(() => {
            setSuccessMsg(false);
          }, 3000);
          console.log("Email sent successfully:", result.text);
        },
        (error) => {
          console.error("Email send failed:", error);
        }
      );

    setFormData({
      email: "",
      subject: "",
      content: "",
    });
  };

  const saveFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {successMsg && (
            <Alert
              sx={{
                fontSize: "15px",
                color: "black",
                fontWeight: "bold",
                backgroundColor: "#6ff292",
                padding: "p-4",
              }}
            >
              Email Sent Successfully.
            </Alert>
          )}
         
          <form
            onSubmit={handleFormSubmit}
            ref={formRef}
            className="space-y-4 text-white"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 text-white">
                <IconButton
                  className="text-white"
                  onClick={handleClose}
                  aria-label="delete"
                >
                  <CloseIcon />
                </IconButton>
                <p className="font-bold text-xl">Contact Me</p>
              </div>
              <Button
                type="submit"
                sx={{
                  padding: "10px",
                  paddingX: "20px",
                  borderRadius: "25px",
                  bgcolor: "#2e2e2d",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  "@media (max-width: 600px)": {
                    fontSize: "1rem",  
                  },
                }}
              >
                Send
              </Button>
            </div>
            <div className="no-scrollbar overflow-y-hidden overflow-x-hidden h-[80vh]">
              <FormControl fullWidth margin="normal">
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  name="email"
                  value={formData.email}
                  onChange={saveFormData}
                  required
                  sx={{
                    input: { color: "white" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "white" },
                      "&:hover fieldset": { borderColor: "white" },
                      "&.Mui-focused fieldset": { borderColor: "white" },
                    },
                    "& .MuiInputLabel-root": { color: "white" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "white" },
                    "@media (max-width: 600px)": {
                      fontSize: "14px", 
                    },
                  }}
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <TextField
                  label="Subject"
                  type="text"
                  variant="outlined"
                  name="subject"
                  value={formData.subject}
                  onChange={saveFormData}
                  required
                  sx={{
                    input: { color: "white" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "white" },
                      "&:hover fieldset": { borderColor: "white" },
                      "&.Mui-focused fieldset": { borderColor: "white" },
                    },
                    "& .MuiInputLabel-root": { color: "white" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "white" },
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Content"
                  variant="outlined"
                  type="text"
                  name="content"
                  value={formData.content}
                  onChange={saveFormData}
                  required
                  multiline
                  rows={8}
                  sx={{
                    textarea: {
                      color: "white",
                      padding: "16px 14px",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "white" },
                      "&:hover fieldset": { borderColor: "white" },
                      "&.Mui-focused fieldset": { borderColor: "white" },
                    },
                    "& .MuiInputLabel-root": { color: "white" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "white" },
                    "@media (max-width: 600px)": {
                      fontSize: "14px", 
                      rows: 5,  
                    },
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.stopPropagation();
                    }
                  }}
                />
              </FormControl>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
