import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#E91E63', '#FF5252']}
        style={styles.header}
      >
        <Text style={styles.welcomeText}>Bem-vinda ao Ipepeca</Text>
        <Text style={styles.subtitle}>Seu espaço profissional</Text>
      </LinearGradient>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Agendamentos</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>R$890</Text>
          <Text style={styles.statLabel}>Ganhos do Mês</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Próximos Agendamentos</Text>
        <View style={styles.appointment}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400' }}
            style={styles.clientImage}
          />
          <View style={styles.appointmentInfo}>
            <Text style={styles.clientName}>Maria Silva</Text>
            <Text style={styles.appointmentTime}>Hoje, 14:00</Text>
            <Text style={styles.serviceType}>Manicure</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 30,
    paddingTop: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    width: '47%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E91E63',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  appointment: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  clientImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  appointmentInfo: {
    marginLeft: 15,
  },
  clientName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  appointmentTime: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  serviceType: {
    fontSize: 14,
    color: '#E91E63',
    marginTop: 2,
  },
});