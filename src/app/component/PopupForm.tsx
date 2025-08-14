"use client";

import * as React from "react";
import Image from "next/image";
import {
    Button,
    Dialog,
    DialogContent,
    IconButton,
    Slide,
    TextField,
    MenuItem,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from "@mui/icons-material/Close";
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children: React.ReactElement<any, any> },
    ref: React.Ref<unknown>
) {
    return <Slide direction="left" ref={ref} {...props} />;
});

type PopupFormProps = {
    open: boolean;
    handleClose: () => void;
};

export default function PopupForm({ open, handleClose }: PopupFormProps) {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        phone: "",
        stage: "",
        message: "",
    });

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        console.log("Form Submitted:", formData);
        handleClose();
    };

    const inputStyle = {
        backgroundColor: "#f8f8f8",
        borderRadius: "12px",
        "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none",
        },
        "&.Mui-focused": {
            boxShadow: "0 0 0 0.2rem rgba(0, 33, 71, 0.25)",
        },
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            maxWidth="md"
            fullWidth
            disableScrollLock
        >
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                    zIndex: 10,
                }}
            >
                <CloseIcon />
            </IconButton>

            <DialogContent sx={{ p: 0 }}>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <div
                        style={{
                            flex: "1 1 50%",
                            position: "relative",
                            minHeight: "520px",
                            overflow: "hidden",
                            color: "#fff",
                        }}
                        className="popup-form-right"
                    >
                        <Image
                            src="/assets/img/study11.png"
                            alt="Study"
                            width={800}       // apni image ka actual width pixel me
                            height={500}      // apni image ka actual height pixel me
                            className="d-none d-lg-flex"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                        <div
                            style={{
                                width: "80%",
                                position: "absolute",
                                bottom: "0%",
                                left: "0%",
                                textAlign: "left",
                                padding: "1rem 1.5rem",
                                color: "#FFF",
                            }}
                        >
                            <h3 style={{ margin: 0, marginBottom: "0.5rem", fontSize: "1.5rem" }}>
                                Welcome to Our Program
                            </h3>
                            <span style={{ fontSize: "1rem" }}>
                                Learn, Grow, and Succeed with Us!
                            </span>
                        </div>
                    </div>
                    <div
                        style={{
                            flex: "1 1 50%",
                            padding: "2rem",
                            background: "#fff",
                        }}
                    >
                        <h3
                            style={{
                                color: "#002147",
                                textAlign: "center",
                                marginBottom: "1.5rem",
                            }}
                        >
                            Book A FREE Trial Now!
                        </h3>

                        <form>
                            <TextField
                                name="name"
                                label="Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={formData.name}
                                onChange={handleChange}
                                sx={inputStyle}
                            />
                            <TextField
                                name="email"
                                label="Email"
                                type="email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={formData.email}
                                onChange={handleChange}
                                sx={inputStyle}
                            />
                            <TextField
                                name="phone"
                                label="Phone Number"
                                type="tel"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={formData.phone}
                                onChange={handleChange}
                                sx={inputStyle}
                            />
                            <TextField
                                select
                                name="stage"
                                label="Stage"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={formData.stage}
                                onChange={handleChange}
                                sx={inputStyle}
                            >
                                <MenuItem value="">Select Stage</MenuItem>
                                <MenuItem value="Beginner">Beginner</MenuItem>
                                <MenuItem value="Intermediate">Intermediate</MenuItem>
                                <MenuItem value="Advanced">Advanced</MenuItem>
                            </TextField>
                            <TextField
                                name="message"
                                label="Message"
                                multiline
                                rows={3}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={formData.message}
                                onChange={handleChange}
                                sx={inputStyle}
                            />

                            <Button
                                fullWidth
                                sx={{
                                    mt: 2,
                                    background: "#002147",
                                    color: "#fff",
                                    borderRadius: "30px",
                                    padding: "12px",
                                    border: "2px solid #002147",
                                    fontWeight: "600",
                                    textTransform: "none",
                                    transition: "0.3s",
                                    "&:hover": {
                                        background: "transparent",
                                        color: "#002147",
                                    },
                                }}
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
