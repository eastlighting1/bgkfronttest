import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Logo from '../../Logo.png';
import { Link as RouterLink } from 'react-router-dom';
import { Paper } from '@mui/material';
import BubbleChart from './BubbleChart';

export default function HomePageLogin() {

  return (
    <React.Fragment>
      <CssBaseline />
      {/* 상단 AppBar */}
      <AppBar
        position="absolute"
        color="inherit"
        elevation={0}
        sx={{
          position: 'relative',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* 홈 페이지로 이동하는 로고 링크 */}
          <RouterLink to="/home">
            <img src={Logo} alt="Your Logo" style={{ maxWidth: '100px' }} />
          </RouterLink>
          {/* 로그아웃과 마이블로그 버튼 */}
          <Box sx={{ display: 'flex', gap: 4 }}>
            <RouterLink to="/">
              <Button sx={{ color: 'black' }}>Logout</Button>
            </RouterLink>
            <RouterLink to="/myblog">
              <Button
                variant="contained"
                to=""
                sx={{
                  padding: '0.3rem 1.5rem',
                  backgroundColor: '#D4AB39',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#D4AB39',
                  },
                }}
              >
                My blog
              </Button>
            </RouterLink>
          </Box>
        </Toolbar>
      </AppBar>
      {/* 페이지 내용 */}
      <Container component="main" maxWidth="md" sx={{ mt: 'auto' }}>
        <Box sx={{ mt: 6 }}>
          {/* 페이지 제목 */}
          <Typography component="h1" variant="h4" align="center" sx={{ fontFamily: 'DMSerifDisplay-Regular' }}>
            Generate the Excellence,<br />
            Empower the Knowledge!
          </Typography>
          {/* "Look Around" 버튼 */}
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
            <RouterLink to="/bubble_login">
              <Button
                variant="contained"
                to=""
                sx={{
                  padding: '0.3rem 3rem',
                  backgroundColor: '#D4AB39',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#D4AB39',
                  },
                }}
              >
                Look Around
              </Button>
            </RouterLink>
          </Box>
        </Box>
        {/* 내용 상자 */}
        <Paper >
          {/* 내용 제목 */}
          <BubbleChart />
        </Paper>
      </Container>
    </React.Fragment>
  );
}
