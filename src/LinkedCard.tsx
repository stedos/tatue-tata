import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type Props = {
  link: string;
  img: string;
  headline: string;
  desc: string;
  cta?: string;
};

const LinkedCard: React.FC<Props> = ({ link, img, headline, desc, cta }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'end',
          cursor: 'pointer',
        }}
        onClick={() => window.open(link, '_blank')}
        // onClick={() => (window.location.href = link)}
      >
        <CardMedia
          component="img"
          image={img}
          alt="gold"
          sx={{ flexGrow: 1 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {headline}
          </Typography>
          <Typography>{desc}</Typography>
        </CardContent>
        {cta && (
          <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button size="small">{cta}</Button>
          </CardActions>
        )}
      </Card>
    </Grid>
  );
};

export default LinkedCard;
