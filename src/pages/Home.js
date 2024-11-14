import React from 'react';
import { Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Добро пожаловать в GameEWTapp!
      </Typography>
      <Button variant="contained" color="primary">
        Войти через Telegram
      </Button>
    </motion.div>
  );
}

export default Home;
