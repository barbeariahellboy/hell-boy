// src/components/Header.jsx
import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Modal, 
  Animated,
  TouchableWithoutFeedback,
  useWindowDimensions 
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../styles/theme';

export default function Header() {
  const navigation = useNavigation();
  const route = useRoute();
  const { width } = useWindowDimensions();

  const [menuOpen, setMenuOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(width)).current; // Inicia fora da tela à direita

  // Breakpoint para telas de computador (≥ 768px)
  const isDesktop = width >= 768;

  useEffect(() => {
    if (menuOpen) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [menuOpen, slideAnim]);

  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: width,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setMenuOpen(false);
    });
  };

  const menuItems = [
    { name: 'Home', label: 'Início' },
    { name: 'Serviços', label: 'Serviços' },
    { name: 'Sobre', label: 'Sobre' },
    { name: 'Galeria', label: 'Galeria' },
    { name: 'Contato', label: 'Contato' },
  ];

  const handleNavigate = (screenName) => {
    closeMenu();
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.headerContainer}>
      {isDesktop ? (
        /* ================= DESKTOP (Telas Grandes) ================= */
        <View style={styles.desktopRow}>
          {/* Logo no canto esquerdo */}
          <TouchableOpacity onPress={() => handleNavigate('Home')}>
            <Text style={styles.logoText}>
              STUDIO <Text style={styles.logoHighlight}>HELBY</Text>
            </Text>
          </TouchableOpacity>

          {/* Nav Items na mesma linha */}
          <View style={styles.desktopNavGroup}>
            {menuItems.map((item) => {
              const isActive = route.name === item.name;
              return (
                <TouchableOpacity
                  key={item.name}
                  onPress={() => handleNavigate(item.name)}
                  style={[styles.navItem, isActive && styles.navItemActive]}
                >
                  <Text style={[styles.navText, isActive && styles.navTextActive]}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              );
            })}

            <TouchableOpacity
              style={styles.ctaButton}
              onPress={() => handleNavigate('Agendamento')}
            >
              <Text style={styles.ctaText}>AGENDAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        /* ================= MOBILE (Telas Menores) ================= */
        <View style={styles.mobileRow}>
          {/* Logo no topo mobile */}
          <TouchableOpacity onPress={() => handleNavigate('Home')}>
            <Text style={styles.logoText}>
              STUDIO <Text style={styles.logoHighlight}>HELBY</Text>
            </Text>
          </TouchableOpacity>

          {/* Botão em Bola Vermelha com o menu hambúrguer */}
          <TouchableOpacity 
            style={styles.redCircleButton} 
            onPress={() => setMenuOpen(true)}
            activeOpacity={0.8}
          >
            <Feather name="menu" size={22} color="#FFF" />
          </TouchableOpacity>
        </View>
      )}

      {/* ================= MODAL COM ANIMAÇÃO LATERAL ================= */}
      <Modal
        visible={menuOpen}
        animationType="fade"
        transparent={true}
        onRequestClose={closeMenu}
      >
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPress={closeMenu}
        >
          <TouchableWithoutFeedback>
            <Animated.View 
              style={[
                styles.drawerContainer, 
                { transform: [{ translateX: slideAnim }] }
              ]}
            >
              {/* Cabeçalho do Menu Lateral */}
              <View style={styles.drawerHeader}>
                <Text style={styles.logoText}>
                  STUDIO <Text style={styles.logoHighlight}>HELBY</Text>
                </Text>
                <TouchableOpacity 
                  style={styles.closeCircleButton} 
                  onPress={closeMenu}
                >
                  <Feather name="x" size={22} color="#FFF" />
                </TouchableOpacity>
              </View>

              {/* Links do Menu Mobile */}
              <ScrollView contentContainerStyle={styles.drawerNavItems}>
                {menuItems.map((item) => {
                  const isActive = route.name === item.name;
                  return (
                    <TouchableOpacity
                      key={item.name}
                      onPress={() => handleNavigate(item.name)}
                      style={[styles.drawerNavItem, isActive && styles.drawerNavItemActive]}
                    >
                      <Text style={[styles.drawerNavText, isActive && styles.drawerNavTextActive]}>
                        {item.label}
                      </Text>
                    </TouchableOpacity>
                  );
                })}

                <TouchableOpacity
                  style={styles.drawerCtaButton}
                  onPress={() => handleNavigate('Agendamento')}
                >
                  <Text style={styles.ctaText}>AGENDAR HORÁRIO</Text>
                </TouchableOpacity>
              </ScrollView>
            </Animated.View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.colors.background,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    paddingVertical: 14,
    paddingHorizontal: theme.spacing.lg,
  },
  logoText: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSize.lg,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  logoHighlight: {
    color: theme.colors.primary,
  },

  /* ------------ DESKTOP STYLES ------------ */
  desktopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  desktopNavGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  navItem: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  navItemActive: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.primary,
  },
  navText: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSize.sm,
    fontWeight: '600',
  },
  navTextActive: {
    color: theme.colors.textPrimary,
  },
  ctaButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: theme.borderRadius.sm,
    marginLeft: 10,
  },
  ctaText: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSize.sm,
    fontWeight: 'bold',
  },

  /* ------------ MOBILE STYLES ------------ */
  mobileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  redCircleButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },

  /* ------------ DRAWER / MODAL STYLES ------------ */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  drawerContainer: {
    width: '80%',
    maxWidth: 320,
    height: '100%',
    backgroundColor: theme.colors.background,
    borderLeftWidth: 1,
    borderLeftColor: theme.colors.border,
    padding: theme.spacing.lg,
  },
  drawerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
    paddingBottom: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  closeCircleButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: theme.colors.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerNavItems: {
    gap: 16,
  },
  drawerNavItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: theme.borderRadius.md,
  },
  drawerNavItemActive: {
    backgroundColor: theme.colors.cardBackground,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.primary,
  },
  drawerNavText: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSize.md,
    fontWeight: '600',
  },
  drawerNavTextActive: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  drawerCtaButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 14,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    marginTop: 24,
  },
});