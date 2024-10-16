export type NotificationType = {
  title: string
  content?: string
  time: string
}

export const notificationData: NotificationType[] = [
  {
    title: 'Nouvelle compagnie !️',
    content:
      'VIP Transport est desormais sur Cargo',
    time: '16 Oct 2024',
  },
  {
    title: 'Paiement par Wave',
    content:
    'Payez vos réservations avec via Wave',
    time: '15 Oct 2024',
  },
]
