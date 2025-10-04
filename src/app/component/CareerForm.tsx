"use client";

import * as React from "react";
import { useState } from "react";
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
    props: TransitionProps & { children: React.ReactElement },
    ref: React.Ref<unknown>
) {
    return <Slide direction="right" ref={ref} {...props} />;
});

type PopupFormProps = {
    open: boolean;
    handleClose2: () => void;
};

// ✅ Form data type define kiya
interface FormData {
    name: string;
    email: string;
    phone: string;
    qualification: string;
    resume: File | null;
}

export default function PopupForm({ open, handleClose2 }: PopupFormProps) {
    const [formData, setFormData] = React.useState<FormData>({
        name: "",
        email: "",
        phone: "",
        qualification: "",
        resume: null,
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkSize = () => setIsMobile(window.innerWidth < 768);
        checkSize();
        window.addEventListener("resize", checkSize);
        return () => window.removeEventListener("resize", checkSize);
    }, []);

    React.useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            // FormData banaya file ke liye
            const data = new FormData();
            data.append("name", formData.name);
            data.append("email", formData.email);
            data.append("phone", formData.phone);
            data.append("qualification", formData.qualification);
            if (formData.resume) {
                data.append("resume", formData.resume);
            }

            console.log("Submitting form:", data);

            // Dummy delay
            await new Promise((res) => setTimeout(res, 1000));

            setSuccess(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                qualification: "",
                resume: null, // ✅ Reset correct
            });
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const inputStyle = {
        backgroundColor: "#f8f8f8",
        borderRadius: "12px",
        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
        "&.Mui-focused": {
            boxShadow: "0 0 0 0.2rem rgba(0, 33, 71, 0.25)",
        },
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose2}
            aria-labelledby="form-dialog-title"
            maxWidth="md"
            fullWidth
            disableScrollLock
        >
            <IconButton
                aria-label="close"
                onClick={handleClose2}
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
                    {!isMobile && (
                        <div
                            style={{
                                flex: "1 1 50%",
                                position: "relative",
                                minHeight: "520px",
                                overflow: "hidden",
                                color: "#fff",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <div
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >
                                <Image
                                    src="/assets/img/study11.png"
                                    alt="Study"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    )}

                    <div
                        style={{
                            flex: "1 1 50%",
                            padding: "20px",
                            background: "#fff",
                        }}
                    >
                        <h3
                            style={{
                                color: "#002147",
                                textAlign: "center",
                                marginBottom: "8px",
                            }}
                        >
                            “Turn your passion into profession”
                        </h3>

                        <form onSubmit={handleSubmit}>
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
                                name="qualification"
                                label="Qualification"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={formData.qualification}
                                onChange={handleChange}
                                sx={inputStyle}
                            >
                                <MenuItem value="">
                                    Select Qualification
                                </MenuItem>
                                <MenuItem value="Graduate">
                                    Graduate
                                </MenuItem>
                                <MenuItem value="Post Graduate">
                                    Post Graduate
                                </MenuItem>
                            </TextField>

                            <Button
                                variant="outlined"
                                component="label"
                                fullWidth
                                sx={{
                                    mt: 2,
                                    borderRadius: "12px",
                                    textTransform: "none",
                                }}
                            >
                                {formData.resume ? formData.resume.name : "Upload Resume"}
                                <input
                                    type="file"
                                    name="resume"
                                    accept=".pdf,.doc,.docx"
                                    hidden
                                    onChange={(e) => {
                                        if (e.target.files && e.target.files[0]) {
                                            setFormData({
                                                ...formData,
                                                resume: e.target.files[0],
                                            });
                                        }
                                    }}
                                />
                            </Button>

                            {error && (
                                <p style={{ color: "red", textAlign: "center" }}>
                                    {error}
                                </p>
                            )}
                            {success && (
                                <p
                                    style={{
                                        color: "green",
                                        textAlign: "center",
                                    }}
                                >
                                    Form submitted successfully!
                                </p>
                            )}

                            <Button
                                type="submit"
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
                                disabled={loading}
                            >
                                {loading ? "Submitting..." : "Submit"}
                            </Button>
                        </form>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
