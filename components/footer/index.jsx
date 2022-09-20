import { Container, Box, Grid } from "@mui/material";

export default function Footer() {
  return (
    <footer style={{ color: "gray", position: "fixed", bottom: 0 }}>
      <Box>
        <Container>
          <div className="container-fluid">
            <a
              className="navbar-brand copyright"
              href="https://officialrajdeepsingh.dev"
            >
              {" "}
              <p> @Copyrights by Rajdeep Singh</p>{" "}
            </a>
          </div>
        </Container>
      </Box>
    </footer>
  );
}
