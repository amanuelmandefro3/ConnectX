import { useState } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Stack, Badge, Container, IconButton, Button } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// utils
import { bgGradient } from 'src/utils/cssStyles';
// routes
import { paths } from 'src/routes/paths';
// components
import Iconify from 'src/components/iconify';
import { MegaMenuDesktopHorizon, MegaMenuMobile } from 'src/components/mega-menu';
// store
import { useCartStore } from 'src/store/cart';
//
import { data } from './config-navigation';
import { EcommerceCartPopover } from '../../cart';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.9),
    imgUrl: '/assets/background/overlay_1.jpg',
  }),
}));

// ----------------------------------------------------------------------

export default function EcommerceHeader() {
  const isMdUp = useResponsive('up', 'md');
  const { getTotalItems } = useCartStore();
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  return (
    <StyledRoot>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          height: { xs: 64, md: 72 },
        }}
      >
        {isMdUp ? (
          <MegaMenuDesktopHorizon data={data} />
        ) : (
          <MegaMenuMobile
            data={data}
            open={openMenuMobile}
            onOpen={() => setOpenMenuMobile(true)}
            onClose={() => setOpenMenuMobile(false)}
            action={
              <Button
                color="inherit"
                onClick={() => setOpenMenuMobile(true)}
                startIcon={<Iconify icon="carbon:menu" />}
              >
                Categories
              </Button>
            }
          />
        )}

        <Stack
          spacing={3}
          direction="row"
          alignItems="center"
          flexGrow={1}
          justifyContent="flex-end"
        >
          {!isMdUp && (
            <IconButton size="small" color="inherit" sx={{ p: 0 }}>
              <Iconify icon="carbon:search" width={24} />
            </IconButton>
          )}

          <Badge badgeContent={2} color="info">
            <IconButton
              component={NextLink}
              href={paths.eCommerce.wishlist}
              size="small"
              color="inherit"
              sx={{ p: 0 }}
            >
              <Iconify icon="carbon:favorite" width={24} />
            </IconButton>
          </Badge>

          <EcommerceCartPopover />

          <IconButton
            component={NextLink}
            href={paths.eCommerce.account.personal}
            size="small"
            color="inherit"
            sx={{ p: 0 }}
          >
            <Iconify icon="carbon:user" width={24} />
          </IconButton>
        </Stack>
      </Container>
    </StyledRoot>
  );
}
