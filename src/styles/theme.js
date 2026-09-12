// src/styles/theme.js

export const theme = {
  colors: {
    // Fundo principal escuro (utilizado na maior parte das páginas)
    background: '#0B0B0B',
    
    // Fundo secundário claro (estilo papel/seções de contraste)
    backgroundLight: '#E5E4E2',

    // Cartões e inputs no tema escuro
    cardBackground: '#141414',
    cardBackgroundLight: '#F2F1EF',
    inputBackground: '#0F0F0F',

    // Cor primária: Vermelho marcante (Botões "Agendar", destaques e títulos)
    primary: '#D91C24',
    primaryHover: '#B8141B',

    // Destaque secundário: Amarelo/Dourado (utilizado nas sombras/detalhes da marca Studio Helby)
    accent: '#FFC800',

    // Textos
    textPrimary: '#FFFFFF',
    textSecondary: '#9E9E9E',
    textDark: '#111111', // Para textos em cima de fundos claros/seções claras

    // Bordas e Divisores
    border: '#262626',
    borderLight: '#CCCCCC',

    // Estados e Feedback
    success: '#2E7D32',
    error: '#D91C24',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 26,
    xxl: 34,
    title: 42,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
    circle: 100, // Para elementos circulares
  },
};