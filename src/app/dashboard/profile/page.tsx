import Link from "next/link"
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

export default function ProfilePage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>My Profile</CardTitle>
          <CardDescription>
            Manage your personal information and account settings.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" defaultValue="Sophia" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" defaultValue="Davis" />
                </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="sophia.davis@example.com" />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" defaultValue="555-123-4567" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>
            Change your password here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
             <div className="grid gap-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Update Password</Button>
        </CardFooter>
      </Card>

       <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>
            Manage how you receive notifications from us.
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
                Email Notifications
              </label>
              <p className="text-sm text-muted-foreground">
                Receive reminders and updates via email.
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
                SMS Notifications
              </label>
              <p className="text-sm text-muted-foreground">
                Get booking confirmations and last-minute changes via text.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Save Preferences</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
