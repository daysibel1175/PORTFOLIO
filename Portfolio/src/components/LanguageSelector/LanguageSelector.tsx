import { useTranslation } from 'react-i18next';
import { Select, MenuItem, Box, useTheme } from '@mui/material';
import { ES, BR, US } from 'country-flag-icons/react/3x2';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const theme = useTheme();

  const languages = [
    { code: 'es', name: 'ES', Flag: ES },
    { code: 'en', name: 'EN', Flag: US },
    { code: 'pt', name: 'PT', Flag: BR },
  ];

  return (
    <Select
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      size="small"
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.customText?.contrast,
        borderRadius: 1,
        '.MuiSelect-icon': {
          color: theme.palette.primary.main,
        },
      }}
      renderValue={(value) => {
        const { Flag, name } =
          languages.find((lang) => lang.code === value) || languages[0];

        return (
          <Box display="flex" alignItems="center">
            <Flag style={{ width: 24, marginRight: 8 }} />
            {name}
          </Box>
        );
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.customText?.contrast || '#fff',
          },
        },
      }}
    >
      {languages.map(({ code, name, Flag }) => (
        <MenuItem key={code} value={code}>
          <Box display="flex" alignItems="center">
            <Flag style={{ width: 24, marginRight: 8 }} /> {name}
          </Box>
        </MenuItem>
      ))}
    </Select>
  );
};

export default LanguageSelector;