// src/screens/HomeScreen.jsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  useWindowDimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../styles/theme';
import Header from '../../components/header/Header';

export default function HomeScreen() {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  // Destaques rápidos do rodapé do Hero
  const quickHighlights = [
    { id: '1', label: 'CORTES MASCULINOS', icon: 'content-cut' },
    { id: '2', label: 'BARBA MODELADA', icon: 'mustache' },
    { id: '3', label: 'SOBRANCELHA DESIGN', icon: 'eye-outline' },
    { id: '4', label: 'PRODUTOS PREMIUM', icon: 'bottle-tonic-outline' },
  ];

  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* ================= HERO SECTION ================= */}
        <ImageBackground
          source={{ uri: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000' }}
          style={styles.heroBackground}
          imageStyle={styles.heroBackgroundImage}
        >
          {/* Overlay escuro para dar contraste com os textos */}
          <View style={styles.heroOverlay}>
            <View style={styles.heroContent}>
              {/* Título Principal */}
              <Text style={styles.heroBrandText}>
                STUDIO <Text style={styles.heroBrandHighlight}>HELBY</Text>
              </Text>
              <Text style={styles.heroSubBrand}>BARBER</Text>

              {/* Slogan */}
              <View style={styles.sloganContainer}>
                <Text style={styles.sloganText}>
                  MAIS QUE UM CORTE,{' '}
                  <Text style={styles.sloganHighlight}>É ESTILO DE VIDA.</Text>
                </Text>
              </View>

              {/* Botão de Agendamento */}
              <TouchableOpacity
                style={styles.ctaButton}
                activeOpacity={0.85}
                onPress={() => navigation.navigate('Agendamento')}
              >
                <Text style={styles.ctaButtonText}>AGENDAR HORÁRIO</Text>
                <Feather name="arrow-right" size={20} color="#FFF" style={styles.ctaIcon} />
              </TouchableOpacity>
            </View>

            {/* FAIXA INFERIOR DE SERVIÇOS RÁPIDOS (ICONS) */}
            <View style={styles.quickServicesContainer}>
              {quickHighlights.map((item) => (
                <View key={item.id} style={styles.quickServiceItem}>
                  <View style={styles.iconCircle}>
                    <MaterialCommunityIcons name={item.icon} size={28} color={theme.colors.primary} />
                  </View>
                  <Text style={styles.quickServiceText}>{item.label}</Text>
                </View>
              ))}
            </View>

            {/* TAGLINE DE VALORES */}
            <View style={styles.valuesBar}>
              <Text style={styles.valueText}>QUALIDADE</Text>
              <Text style={styles.valueBullet}>•</Text>
              <Text style={styles.valueText}>ESTILO</Text>
              <Text style={styles.valueBullet}>•</Text>
              <Text style={styles.valueText}>RESPEITO</Text>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    flexGrow: 1,
  },

  /* ------------ HERO ------------ */
  heroBackground: {
    width: '100%',
    minHeight: 650,
  },
  heroBackgroundImage: {
    opacity: 0.35,
  },
  heroOverlay: {
    flex: 1,
    backgroundColor: 'rgba(11, 11, 11, 0.75)',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xxl,
  },
  heroContent: {
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
    marginTop: theme.spacing.xl,
  },
  heroBrandText: {
    fontSize: theme.fontSize.title,
    fontWeight: '900',
    color: theme.colors.textPrimary,
    letterSpacing: 3,
    textAlign: 'center',
  },
  heroBrandHighlight: {
    color: theme.colors.primary,
  },
  heroSubBrand: {
    fontSize: theme.fontSize.xl,
    fontWeight: '800',
    color: theme.colors.accent,
    letterSpacing: 6,
    marginTop: -6,
    marginBottom: theme.spacing.xl,
  },
  sloganContainer: {
    maxWidth: 320,
    marginBottom: theme.spacing.xl,
  },
  sloganText: {
    fontSize: theme.fontSize.lg,
    fontWeight: '800',
    color: theme.colors.textPrimary,
    textAlign: 'center',
    lineHeight: 28,
  },
  sloganHighlight: {
    color: theme.colors.primary,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: theme.borderRadius.md,
    elevation: 6,
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  ctaButtonText: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSize.md,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  ctaIcon: {
    marginLeft: 10,
  },

  /* ------------ QUICK SERVICES ------------ */
  quickServicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.colors.cardBackground,
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.md,
    marginHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    gap: 12,
  },
  quickServiceItem: {
    alignItems: 'center',
    width: '22%',
    minWidth: 70,
  },
  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: 'rgba(217, 28, 36, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  quickServiceText: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSize.xs,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  /* ------------ VALUES BAR ------------ */
  valuesBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: theme.spacing.lg,
    gap: 12,
  },
  valueText: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSize.xs,
    fontWeight: '700',
    letterSpacing: 2,
  },
  valueBullet: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.xs,
  },
});