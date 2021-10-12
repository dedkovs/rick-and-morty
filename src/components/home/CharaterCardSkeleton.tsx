import { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const cardStyle = {
  minWidth: { xs: 275, sm: 336 },
  width: { xs: 275, sm: 336 },
  borderRadius: 2,
  boxShadow: '0 5px 10px rgba(0,0,0,0.2)',
  zIndex: 1,
  height: { xs: 160, sm: 182 },
} as const;

const cardContentStyle = {
  display: 'flex',
  ':last-child': { paddingBottom: { xs: 1.5, sm: 2.5 } },
  padding: { xs: 1, sm: 1.5 },
  height: '100%',
};

const characterCardImageStyle = {
  width: { xs: 100, sm: 150 },
  height: { xs: 100, sm: 150 },
  borderRadius: 1,
  marginRight: 1.5,
};

const containerForPositioningLearnMoreButtonToBottom = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flexGrow: 1,
} as const;

const titleStyle = {
  marginBottom: { xs: 3, sm: 3 },
  transformOrigin: '0 0',
  borderRadius: { xs: 1, sm: 1.5 },
  transform: 'initial',
  height: { xs: '1.3rem', sm: '1.5rem' },
};

const infoStyle = {
  height: { xs: '0.8rem', sm: '0.8rem' },
  marginBottom: 1,
  transformOrigin: '0 0',
  borderRadius: { xs: 0.5, sm: 1 },
  transform: 'initial',
};

const buttonStyle = {
  transformOrigin: '0 0',
  borderRadius: { xs: 1, sm: 1.5 },
  transform: 'initial',
  height: { xs: '1.3rem', sm: '1.5rem' },
  width: '60%',
};

const CharacterCardSkeleton: FC = () => {
  return (
    <Card sx={cardStyle}>
      <CardContent sx={cardContentStyle}>
        <Skeleton
          sx={characterCardImageStyle}
          animation="wave"
          variant="rectangular"
        />
        <Box sx={containerForPositioningLearnMoreButtonToBottom}>
          <Box>
            <Skeleton animation="wave" sx={titleStyle} />
            <Skeleton animation="wave" sx={infoStyle} width="80%" />
            <Skeleton animation="wave" sx={infoStyle} width="60%" />
            <Skeleton animation="wave" sx={infoStyle} width="50%" />
          </Box>
          <Box>
            <Skeleton animation="wave" sx={buttonStyle} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CharacterCardSkeleton;
