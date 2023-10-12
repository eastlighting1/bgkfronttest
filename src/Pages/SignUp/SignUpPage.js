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
import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

function AuthLinks() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 3, mb: 2}}>
      <Link component={RouterLink} to="/login" color="inherit" style={{ marginRight: '10px' }}>
        이미 회원이신가요?
      </Link>
    </Typography>
  );
}

export default function SignUpPage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color='inherit'
        elevation={0}
        sx={{
          position: 'relative',
        }}
      >
        <Toolbar>
          <img src={Logo} alt="Your Logo" style={{ maxWidth: '100px' }} />
        </Toolbar>
      </AppBar>
      <Typography component="h1" variant="h4" align="center" marginTop={6} style={{ fontWeight: 'bold' }}>
        Join :)
      </Typography>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, backgroundColor: "#FFFDFD" }}>
        <React.Fragment>
      <Grid container spacing={3} alignItems="center" marginTop={1}>
      <Grid item xs={12} sm={4} align="center">
          이름
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            hiddenLabel
            id="email"
            type='email'
            variant="filled"
            size="small"
            fullWidth
          />
        </Grid>
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
            type='password'
            variant="filled"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4} align="center">
          비밀번호 확인
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            hiddenLabel
            id="password"
            type='password'
            variant="filled"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4} align="center">
          이메일
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            hiddenLabel
            id="email"
            type='email'
            variant="filled"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4} align="center">
          성별
        </Grid>
        <Grid item xs={12} sm={6}>
            <FormControl>
                <RadioGroup row >
                    <FormControlLabel value="Men" control={<Radio />} label="남" sx={{ marginRight: '35px', marginLeft: '15px' }}/>
                    <FormControlLabel value="Women" control={<Radio />} label="여" sx={{ marginLeft: '35px' }}/>
                </RadioGroup>
            </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} align="center">
          생년월일
        </Grid>
        <Grid item xs={12} sm = {6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="생년월일" />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={4} align="center">
          관심사
        </Grid>
        <Grid item xs={12} sm = {8}>
            <FormGroup row>
                <FormControlLabel control={<Checkbox />} label="주제1" />
                <FormControlLabel control={<Checkbox />} label="주제2" />
                <FormControlLabel control={<Checkbox />} label="주제3" />
                <FormControlLabel control={<Checkbox />} label="주제4" />
                <FormControlLabel control={<Checkbox />} label="주제5" />
                <FormControlLabel control={<Checkbox />} label="주제6" />
                <FormControlLabel control={<Checkbox />} label="주제7" />
                <FormControlLabel control={<Checkbox />} label="주제8" />
                <FormControlLabel control={<Checkbox />} label="주제9" />
            </FormGroup>
        </Grid>
      </Grid>
    </React.Fragment>
          <React.Fragment>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
              <Button
                variant="contained"
                to="" // 빈 문자열로 설정하여 현재 페이지에 머무름
                sx={{
                  padding: '0.3rem 3rem',
                  backgroundColor: '#D4AB39',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#D4AB39',
                  },
                }}
              >
                회원가입
              </Button>
            </Box>
            <AuthLinks />
          </React.Fragment>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
