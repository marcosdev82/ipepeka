import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ServicesScreen() {
  const services = [
    { id: 1, name: 'Manicure', price: 'R$45', duration: '45 min', icon: 'hand-left' },
    { id: 2, name: 'Pedicure', price: 'R$50', duration: '45 min', icon: 'footsteps' },
    { id: 3, name: 'Manicure + Pedicure', price: 'R$85', duration: '90 min', icon: 'sparkles' },
    { id: 4, name: 'Esmaltação em Gel', price: 'R$70', duration: '60 min', icon: 'color-palette' },
    { id: 5, name: 'Spa dos Pés', price: 'R$65', duration: '60 min', icon: 'water' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meus Serviços</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add-circle" size={24} color="#E91E63" />
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.servicesList}>
        {services.map((service) => (
          <TouchableOpacity key={service.id} style={styles.serviceCard}>
            <View style={styles.serviceIcon}>
              <Ionicons name={service.icon} size={24} color="#E91E63" />
            </View>
            <View style={styles.serviceInfo}>
              <Text style={styles.serviceName}>{service.name}</Text>
              <Text style={styles.serviceDetails}>
                {service.duration} • {service.price}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#999" />
          </TouchableOpacity>
        ))}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#E91E63',
    marginLeft: 5,
    fontSize: 16,
  },
  servicesList: {
    padding: 20,
  },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  serviceIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF0F3',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceInfo: {
    flex: 1,
    marginLeft: 15,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  serviceDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});