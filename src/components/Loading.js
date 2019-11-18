import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../styles/loading.css';

export default function Loading() {
  return (
    <div className="Loading">
      <CircularProgress color="secondary" />
    </div>
  );
}