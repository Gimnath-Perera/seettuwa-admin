import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { StyledCard } from './styles';
import CardHeader from '@mui/material/CardHeader';

interface Props {
  seettu: any[];
  about: any[];
  contacts: any[];
  overview: any[];
}

const renderList = (arr: any[]): any => {
  if (arr && arr.length) {
    return arr.map((item, index) => {
      return (
        <Box
          key={index}
          sx={{
            display: 'flex',
            '&:not(:last-of-type)': { mb: 2 },
          }}
        >
          <Box sx={{ columnGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: 600 }} variant='body2'>
              {`${item.property.charAt(0).toUpperCase() + item.property.slice(1)}:`}
            </Typography>
            <Typography>{item.value.charAt(0).toUpperCase() + item.value.slice(1)}</Typography>
          </Box>
        </Box>
      );
    });
  } else {
    return null;
  }
};

const ProfileOverview = (props: Props): JSX.Element => {
  const { seettu, about, contacts } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <StyledCard>
          <CardHeader
            title={<Typography variant='h6'>About User</Typography>}
            sx={{ '& .MuiCardHeader-avatar': { mr: 2.5 } }}
            avatar='👤'
            titleTypographyProps={{ sx: { color: 'text.primary' } }}
          />
          <CardContent>
            <Box sx={{ mb: 3 }}>
              <Typography variant='body1' sx={{ mb: 2, display: 'block', fontWeight: 'bold' }}>
                About
              </Typography>
              {renderList(about)}
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography variant='body1' sx={{ mb: 2, display: 'block', fontWeight: 'bold' }}>
                Contacts
              </Typography>
              {renderList(contacts)}
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography variant='body1' sx={{ mb: 2, display: 'block', fontWeight: 'bold' }}>
                seettu
              </Typography>
              {renderList(seettu)}
            </Box>
          </CardContent>
        </StyledCard>
      </Grid>
    </Grid>
  );
};

export default ProfileOverview;
