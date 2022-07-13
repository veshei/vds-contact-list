import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from '@mui/material';
import React from 'react';
import { useState } from 'react';

interface ContactCardProps {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  emailAddress: string;
}
export default function ContactCard(props: ContactCardProps): JSX.Element {
  const { firstName, lastName, phoneNumber, emailAddress } = props;
  const [showAll, setShowAll] = useState(false);
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
      <CardActions>
        <Button size="small" onClick={() => onClickButton()}>
          {showAll ? 'Collapse' : 'Expand'}
        </Button>
      </CardActions>
    </Card>
  );
}
