import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Logo from '../../Logo.png';
import { Link as RouterLink } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import PostList from './PostList';

export default function BubbleLogin() {

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
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Box
          component="form"
          justifyContent="space-evenly"
          sx={{
            display: 'flex',
            flexDirection: 'row', // 요소들을 수평으로 정렬
            alignItems: 'center', // 수직 가운데 정렬
            '& > :not(style)': { m: 1 }, // 요소들 간의 간격 설정
            width: '100%',
          }}
          noValidate
        >
          <InputBase
            sx={{ 
              ml: 1, 
              flex: 0.7,
              border: '1px solid #888888', // 테두리 스타일 설정
              borderRadius: '4px', // 테두리의 모서리를 둥글게 만듭니다.
              padding: '6px 12px', // 내부 패딩 설정
            }}
            placeholder="검색어를 입력해주세요"
            inputProps={{ 'aria-label': "검색어를 입력해주세요" }}
          />
          <Button
            variant="contained"
            to=""
            sx={{
              padding: '0.3rem 1rem',
              backgroundColor: '#D4AB39',
              color: 'white',
              '&:hover': {
                backgroundColor: '#D4AB39',
              },
            }}
          >
            Go!
          </Button>
        </Box>

        {/* 내용 상자 */}
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 } }}>
          {/* 내용 제목 */}
          <PostList />
        </Paper>
      </Container>
    </React.Fragment>
  );
}
