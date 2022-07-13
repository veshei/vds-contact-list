import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  IconButton,
  IconButtonProps,
  styled,
} from '@mui/material';
import React from 'react';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/router';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface ContactCardProps {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  emailAddress: string;
}
export default function ContactCard(props: ContactCardProps): JSX.Element {
  const { id, firstName, lastName, phoneNumber, emailAddress } = props;
  const [showAll, setShowAll] = useState(false);
  const router = useRouter();
  const formatPhone = (phone: string) => {
    const formattedPhone =
      '(' +
      phone.substring(0, 3) +
      ') ' +
      phone.substring(3, 6) +
      '-' +
      phone.substring(6, 11);

    return formattedPhone;
  };

  const onClickButton = () => {
    setShowAll(!showAll);
  };
  return (
    <Card sx={{ minWidth: 275, width: 275, margin: 1.5 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Name
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
          {firstName}&nbsp;{lastName}
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: 14 }} color="text.secondary">
          Phone Number
        </Typography>
        <Typography variant="body2">
          {formatPhone(phoneNumber.toString())}
        </Typography>
        {showAll && (
          <React.Fragment>
            <Typography
              sx={{ mt: 1.5, mb: 1.5, fontSize: 14 }}
              color="text.secondary"
            >
              Email Address
            </Typography>
            <Typography variant="body2">{emailAddress}</Typography>
          </React.Fragment>
        )}
      </CardContent>
      <CardActions disableSpacing>
        <Button
          size="small"
          onClick={() =>
            router.push({
              pathname: 'edit-contact',
              query: {
                id: id,
              },
            })
          }
        >
          Edit Contact
        </Button>
        <ExpandMore
          expand={showAll}
          onClick={() => onClickButton()}
          aria-expanded={showAll}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Card>
  );
}
