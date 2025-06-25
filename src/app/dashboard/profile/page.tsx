'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useSettings } from "@/context/settings-context"

export default function ProfilePage() {
  const { language } = useSettings();
  
  const translations = {
      myProfile: { id: "Profil Saya", en: "My Profile" },
      manageProfile: { id: "Kelola informasi pribadi dan pengaturan akun Anda.", en: "Manage your personal information and account settings." },
      firstName: { id: "Nama depan", en: "First name" },
      lastName: { id: "Nama belakang", en: "Last name" },
      email: { id: "Email", en: "Email" },
      phone: { id: "Nomor Telepon", en: "Phone Number" },
      saveChanges: { id: "Simpan Perubahan", en: "Save Changes" },
      password: { id: "Kata Sandi", en: "Password" },
      changePassword: { id: "Ubah kata sandi Anda di sini.", en: "Change your password here." },
      currentPassword: { id: "Kata Sandi Saat Ini", en: "Current Password" },
      newPassword: { id: "Kata Sandi Baru", en: "New Password" },
      confirmNewPassword: { id: "Konfirmasi Kata Sandi Baru", en: "Confirm New Password" },
      updatePassword: { id: "Perbarui Kata Sandi", en: "Update Password" },
      notificationSettings: { id: "Pengaturan Notifikasi", en: "Notification Settings" },
      manageNotifications: { id: "Kelola cara Anda menerima notifikasi dari kami.", en: "Manage how you receive notifications from us." },
      emailNotifications: { id: "Notifikasi Email", en: "Email Notifications" },
      emailNotificationsDesc: { id: "Terima pengingat dan pembaruan melalui email.", en: "Receive reminders and updates via email." },
      smsNotifications: { id: "Notifikasi SMS", en: "SMS Notifications" },
      smsNotificationsDesc: { id: "Dapatkan konfirmasi pemesanan dan perubahan menit terakhir melalui teks.", en: "Get booking confirmations and last-minute changes via text." },
      savePreferences: { id: "Simpan Preferensi", en: "Save Preferences" },
  };

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>{translations.myProfile[language]}</CardTitle>
          <CardDescription>
            {translations.manageProfile[language]}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="first-name">{translations.firstName[language]}</Label>
                    <Input id="first-name" defaultValue="Sophia" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="last-name">{translations.lastName[language]}</Label>
                    <Input id="last-name" defaultValue="Davis" />
                </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">{translations.email[language]}</Label>
              <Input id="email" type="email" defaultValue="sophia.davis@example.com" />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="phone">{translations.phone[language]}</Label>
              <Input id="phone" type="tel" defaultValue="555-123-4567" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>{translations.saveChanges[language]}</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{translations.password[language]}</CardTitle>
          <CardDescription>
            {translations.changePassword[language]}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
             <div className="grid gap-2">
                <Label htmlFor="current-password">{translations.currentPassword[language]}</Label>
                <Input id="current-password" type="password" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="new-password">{translations.newPassword[language]}</Label>
                <Input id="new-password" type="password" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="confirm-password">{translations.confirmNewPassword[language]}</Label>
                <Input id="confirm-password" type="password" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>{translations.updatePassword[language]}</Button>
        </CardFooter>
      </Card>

       <Card>
        <CardHeader>
          <CardTitle>{translations.notificationSettings[language]}</CardTitle>
          <CardDescription>
            {translations.manageNotifications[language]}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-start gap-4">
            <Checkbox id="email-notifications" defaultChecked />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="email-notifications"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {translations.emailNotifications[language]}
              </label>
              <p className="text-sm text-muted-foreground">
                {translations.emailNotificationsDesc[language]}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Checkbox id="sms-notifications" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="sms-notifications"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {translations.smsNotifications[language]}
              </label>
              <p className="text-sm text-muted-foreground">
                {translations.smsNotificationsDesc[language]}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>{translations.savePreferences[language]}</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
