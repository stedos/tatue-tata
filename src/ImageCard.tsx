import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type Props = {
  img: string;
  headline: string;
  desc: string;
  cta: string;
};

const ImageCard: React.FC<Props> = ({ img, headline, desc, cta }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button size="small">{cta}</Button>
        </CardActions>
        <CardMedia component="img" image={img} alt={img} sx={{ flexGrow: 1 }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {headline}
          </Typography>
          <Typography>{desc}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ImageCard;
