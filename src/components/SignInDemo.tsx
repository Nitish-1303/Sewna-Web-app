import React from 'react';
import { SignInPage, Testimonial } from "./ui/sign-in";

const sewnaTestimonials: Testimonial[] = [
  {
    avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    name: "Meera Patel",
    handle: "@meeradesigns",
    text: "SEWNA gave me a platform to express my art and connect with clients who truly appreciate custom fashion."
  },
  {
    avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    name: "Arjun Sharma",
    handle: "@arjuncouture",
    text: "The collaboration process is seamless. I can focus on designing while SEWNA handles the connections."
  },
  {
    avatarSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    name: "Priya Singh",
    handle: "@priyastyle",
    text: "I finally found the perfect designer for my wedding outfit. The experience was magical!"
  },
];

export default function SignInDemo() {
  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Sign In submitted:", data);
    alert(`Welcome back to SEWNA! Check the console for form data.`);
    // Navigate back to home after successful sign in
    (window as any).navigateTo?.('home');
  };

  const handleGoogleSignIn = () => {
    console.log("Continue with Google clicked");
    alert("Signing in with Google...");
    // Navigate back to home after successful sign in
    (window as any).navigateTo?.('home');
  };

  const handleResetPassword = () => {
    alert("Password reset link will be sent to your email.");
  };

  const handleCreateAccount = () => {
    alert("Redirecting to sign up page...");
    // In a real app, this would navigate to a sign-up page
  };

  return (
    <div className="bg-background text-foreground">
      <SignInPage
        title={
          <span className="font-bold text-foreground tracking-tight">
            Welcome to <span className="text-accent">SEWNA</span>
          </span>
        }
        description="Sign in to connect with independent designers and create something truly yours."
        heroImageSrc="https://images.unsplash.com/photo-1558769132-cb1aea1c8347?w=2160&q=80"
        testimonials={sewnaTestimonials}
        onSignIn={handleSignIn}
        onGoogleSignIn={handleGoogleSignIn}
        onResetPassword={handleResetPassword}
        onCreateAccount={handleCreateAccount}
      />
    </div>
  );
}
