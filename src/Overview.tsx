import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MediaCard from './MediaCard';

export default function Overview() {
  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Fallunterlagen
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Im Nachfolgenden finden Sie alle Unterlagen zu allen offenen Fällen.
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="text.primary"
          marginBottom={5}
        >
          Fall "Tatort Hochzeit" - Aktenzeichen XY
        </Typography>
        <Grid container spacing={4}>
          <MediaCard
            type="audio"
            src="assets/hella.mp3"
            headline="Verhör Hella B.-L."
            desc="Mitschnitt von Verhör durchgeführt von Kommisar Kauderwelsch"
            cta="Audio"
          />
          <MediaCard
            type="audio"
            src="assets/steven.mp3"
            headline="Verhör Steven D."
            desc="Mitschnitt von Verhör durchgeführt von Kommisar Kauderwelsch"
            cta="Audio"
          />
          <MediaCard
            type="video"
            src="assets/hanna.mp4"
            headline="WhatsApp Video"
            desc="Video Datei aus WhatsApp Verlauf von Nummer +49 171 91 *** 31"
            cta="Video"
          />
        </Grid>
      </Container>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="text.primary"
          marginBottom={5}
        >
          Fall "Weihnachten" - Aktenzeichen QVC
        </Typography>
        <Typography variant="h5" align="center">
          Unterlagen fehlen
        </Typography>
      </Container>
    </>
  );
}
