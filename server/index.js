const express = require('express');
  const mongoose = require('mongoose');
  const cors = require('cors');
  const dotenv = require('dotenv');
  const path = require('path'); // Added for path handling
  const authRoutes = require('./routes/auth');
  const contactRoutes = require('./routes/contact');

  dotenv.config();

  const app = express();
  app.use(cors());
  app.use(express.json());

  // Serve static files from the public directory
  app.use(express.static('F:/Unity-Consultancy-Project/public'));

  // Set strictQuery option to suppress warning
  mongoose.set('strictQuery', false);

  // Connect to MongoDB
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log('MongoDB connected'))
      .catch(err => console.log(err));

  // Routes
  app.use('/api/auth', authRoutes);
  app.use('/api/contact', contactRoutes);

  // Serve index.html for the root route
  app.get('/', (req, res) => {
      res.sendFile('index.html', { root: 'F:/Unity-Consultancy-Project/public' });
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
