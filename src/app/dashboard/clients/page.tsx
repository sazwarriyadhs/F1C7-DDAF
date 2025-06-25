import db from '@/lib/db';
import ClientList, { type Client } from '@/components/dashboard/client-list';
import { format } from 'date-fns';

async function getClients(): Promise<Client[]> {
  try {
    const result = await db.query(
      `SELECT 
        id, 
        name, 
        email, 
        phone, 
        total_appointments, 
        last_visit, 
        rfid_bracelet_id as rfid 
      FROM clients 
      ORDER BY name ASC`
    );
    
    // Format date for display
    return result.rows.map(row => ({
      ...row,
      last_visit: row.last_visit ? format(new Date(row.last_visit), 'yyyy-MM-dd') : 'N/A',
    }));
  } catch (error) {
    console.error('Database Error:', error);
    // In case of an error, return an empty array to prevent the page from crashing.
    // A proper error handling mechanism (e.g., showing an error toast) should be implemented.
    return [];
  }
}

export default async function ClientsPage() {
  const clients = await getClients();
  return <ClientList clients={clients} />;
}
