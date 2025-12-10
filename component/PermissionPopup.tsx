import React from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function PermissionPopup({visible, onProceed, onCancel}) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.title}>Permissions Required</Text>
          <Text style={styles.desc}>
            This page needs access to your Camera and Microphone.
          </Text>

          <View style={styles.btnRow}>
            <TouchableOpacity onPress={onCancel} style={styles.cancelBtn}>
              <Text>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onProceed} style={styles.okBtn}>
              <Text style={{color: '#fff'}}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  title: {fontSize: 18, fontWeight: 'bold', marginBottom: 10},
  desc: {fontSize: 15, marginBottom: 20},
  btnRow: {flexDirection: 'row', justifyContent: 'flex-end'},
  cancelBtn: {paddingHorizontal: 20, paddingVertical: 10, marginRight: 10},
  okBtn: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
});
