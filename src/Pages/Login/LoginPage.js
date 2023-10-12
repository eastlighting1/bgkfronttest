import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Logo from '../../Logo.png';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, TextField } from '@mui/material';

function AuthLinks() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 3, mb: 2 }}>
      <Link component={RouterLink} to="/join" color="inherit" style={{ marginRight: '10px' }}>
        회원가입
      </Link>
      |
      <Link component={RouterLink} to="/forgot-password" color="inherit" style={{ marginLeft: '10px' }}>
        아이디/비밀번호 찾기
      </Link>
    </Typography>
  );
}

export default function LoginPage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="inherit"
        elevation={0}
        sx={{
          position: 'relative',
        }}
      >
        <Toolbar>
          <RouterLink to="/"> {/* 홈 페이지로 이동하는 링크 */}
            <img src={Logo} alt="Your Logo" style={{ maxWidth: '100px' }} />
          </RouterLink>
        </Toolbar>
      </AppBar>
      <Typography component="h1" variant="h4" align="center" marginTop={6} style={{ fontWeight: 'bold' }}>
        Login :)
      </Typography>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, backgroundColor: "#FFFDFD" }}>
          <React.Fragment>
            <Grid container spacing={3} alignItems="center" marginTop={1}>
              <Grid item xs={12} sm={4} align="center">
                아이디
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  hiddenLabel
                  id="id"
                  variant="filled"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4} align="center">
                비밀번호
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  hiddenLabel
                  id="password"
                  type="password"
                  variant="filled"
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
          </React.Fragment>
          <React.Fragment>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
              <Button
                variant="contained"
                to="/" // 홈 페이지로 이동하는 링크
                sx={{
                  padding: '0.3rem 3rem',
                  backgroundColor: '#D4AB39',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#D4AB39',
                  },
                }}
              >
                로그인
              </Button>
            </Box>
            <AuthLinks />
          </React.Fragment>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
