import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Button,
  Tooltip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';

export default function ResumePopup({ open, onClose }) {
  const [fullscreen, setFullscreen] = useState(false);

  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton, CurrentScale } = zoomPluginInstance;

  const pdfUrl = '/ShivShankarGupt_FullStack_MERN_Resume.pdf';

  return (
    <Dialog
      open={open}
      onClose={() => {
        setFullscreen(false);
        onClose();
      }}
      fullWidth
      maxWidth={fullscreen ? false : 'md'}
      sx={{
        height: fullscreen ? '100vh' : '90vh',
        top: fullscreen ? 0 : 'auto',
        pointerEvents: 'auto',
        margin: fullscreen ? 0 : 'auto',
        '& .MuiDialog-paper': {
          margin: fullscreen ? 0 : 'auto',
          width: fullscreen ? '100vw' : undefined,
          height: fullscreen ? '100vh' : undefined,
          maxWidth: fullscreen ? '100vw' : undefined,
          maxHeight: fullscreen ? '100vh' : undefined,
          borderRadius: fullscreen ? 0 : undefined,
          overflow: 'hidden',
        },
      }}
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        Resume
        <Stack direction="row" spacing={1} alignItems="center">
          <Tooltip title={fullscreen ? 'Exit Fullscreen' : 'Fullscreen'}>
            <IconButton
              aria-label="toggle fullscreen"
              onClick={() => setFullscreen(!fullscreen)}
              color="primary"
            >
              {fullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Close">
            <IconButton aria-label="close" onClick={() => { setFullscreen(false); onClose(); }}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </DialogTitle>

      {/* Toolbar */}
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" px={5} pb={1}>
        <ZoomOutButton />
        <CurrentScale />
        <ZoomInButton />

        {/* Download */}
        <a
          href={pdfUrl}
          download="ShivShankarGupta_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Button variant="outlined" size="small">
            Download
          </Button>
        </a>
      </Stack>

      <DialogContent dividers sx={{ p: 0, height: fullscreen ? 'calc(100% - 106px)' : 'calc(90vh - 106px)' }}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer fileUrl={pdfUrl} plugins={[zoomPluginInstance]} />
        </Worker>
      </DialogContent>
    </Dialog>
  );
}
