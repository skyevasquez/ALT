import { ADMIN_EMAIL } from './constants'

export function isAdmin(user: any): boolean {
  if (!user) return false
  
  // Try primary email address first (client-side)
  if (user.primaryEmailAddress?.emailAddress === ADMIN_EMAIL) {
    return true
  }
  
  // Fallback to emailAddresses array (server-side)
  if (user.emailAddresses?.length && user.primaryEmailAddressId) {
    const primaryEmail = user.emailAddresses.find((email: any) => email.id === user.primaryEmailAddressId)
    return primaryEmail?.emailAddress === ADMIN_EMAIL
  }
  
  return false
}

export function requireAdmin(user: any): void {
  if (!isAdmin(user)) {
    throw new Error('Admin access required')
  }
}