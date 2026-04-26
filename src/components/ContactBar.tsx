import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Button } from "@mui/material";

export default function ContactBar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Button
          onClick={() =>
            window.open("https://github.com/eblunck", "_blank")?.focus()
          }
          aria-label="GitHub"
          variant="outlined"
          sx={{
            minWidth: 0,
            borderRadius: "50%",
            padding: "10px",
            color: "black",
            borderColor: "lightgray",
            "&:hover": {
              borderColor: "var(--neon-green)",
              backgroundColor: "var(--neon-green)",
            },
          }}
        >
          <GitHubIcon />
        </Button>
        <Button
          aria-label="LinkedIn"
          variant="outlined"
          onClick={() =>
            window
              .open(
                "https://www.linkedin.com/in/emilia-blunck-833836203/",
                "_blank",
              )
              ?.focus()
          }
          sx={{
            minWidth: 0,
            borderRadius: "50%",
            padding: "10px",
            color: "black",
            borderColor: "lightgray",
            "&:hover": {
              borderColor: "var(--neon-green)",
              backgroundColor: "var(--neon-green)",
            },
          }}
        >
          <LinkedInIcon />
        </Button>
        <Button
          aria-label="Email"
          variant="outlined"
          onClick={() =>
            window.open("mailto:emilia@blunck.se", "_blank")?.focus()
          }
          sx={{
            minWidth: 0,
            borderRadius: "50%",
            padding: "10px",
            color: "black",
            borderColor: "lightgray",
            "&:hover": {
              borderColor: "var(--neon-green)",
              backgroundColor: "var(--neon-green)",
            },
          }}
        >
          <EmailIcon />
        </Button>
      </div>
      <Button
        variant="contained"
        onClick={() =>
          window
            .open(
              "https://www.linkedin.com/in/emilia-blunck-833836203/",
              "_blank",
            )
            ?.focus()
        }
        style={{
          backgroundColor: "var(--neon-green)",
          color: "black",
          borderRadius: "3rem",
          boxShadow: "none",
          textTransform: "none",
          fontSize: "16px",
        }}
      >
        Let's talk
        <ArrowOutwardIcon style={{ paddingLeft: "4px" }} />
      </Button>
    </div>
  );
}
