import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';

export default function ScheduleScreen() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const appointments = [
    {
      id: 1,
      time: '09:00',
      client: 'Ana Paula',
      service: 'Manicure',
      status: 'confirmed',
    },
    {
      id: 2,
      time: '11:00',
      client: 'Carla Santos',
      service: 'Pedicure',
      status: 'confirmed',
    },
    {
      id: 3,
      time: '14:00',
      client: 'Maria Silva',
      service: 'Manicure + Pedicure',
      status: 'pending',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.calendarContainer}>
        <Text style={styles.monthText}>Março 2025</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.daysScroll}>
          {[...Array(7)].map((_, index) => (
            <View
              key={index}
              style={[
                styles.dayCard,
                index === 2 && styles.selectedDay,
              ]}
            >
              <Text style={[styles.dayName, index === 2 && styles.selectedDayText]}>
                {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'][index]}
              </Text>
              <Text style={[styles.dayNumber, index === 2 && styles.selectedDayText]}>
                {index + 1}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.appointmentsContainer}>
        <Text style={styles.sectionTitle}>Agendamentos</Text>
        {appointments.map((appointment) => (
          <View key={appointment.id} style={styles.appointmentCard}>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>{appointment.time}</Text>
            </View>
            <View style={styles.appointmentInfo}>
              <Text style={styles.clientName}>{appointment.client}</Text>
              <Text style={styles.serviceText}>{appointment.service}</Text>
              <View style={[
                styles.statusBadge,
                { backgroundColor: appointment.status === 'confirmed' ? '#E8F5E9' : '#FFF3E0' }
              ]}>
                <Text style={[
                  styles.statusText,
                  { color: appointment.status === 'confirmed' ? '#2E7D32' : '#EF6C00' }
                ]}>
                  {appointment.status === 'confirmed' ? 'Confirmado' : 'Pendente'}
                </Text>
              </View>
            </View>
          </View>
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
  calendarContainer: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60,
  },
  monthText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  daysScroll: {
    flexDirection: 'row',
  },
  dayCard: {
    width: 70,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 15,
    backgroundColor: '#f8f8f8',
  },
  selectedDay: {
    backgroundColor: '#E91E63',
  },
  dayName: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  dayNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  selectedDayText: {
    color: '#fff',
  },
  appointmentsContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  appointmentCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
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
  timeContainer: {
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#eee',
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  appointmentInfo: {
    flex: 1,
    marginLeft: 15,
  },
  clientName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  serviceText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    marginTop: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
});