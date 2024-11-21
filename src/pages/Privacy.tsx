import React from 'react';
import Markdown from 'markdown-to-jsx';
import { Shield, Lock, Eye } from 'lucide-react';

const privacyContent = `
# Privacy Policy

## Introduction
At Nearly, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.

## Information We Collect
- Profile information
- Location data
- Usage information
- Communication data

## How We Use Your Information
- To provide and improve our services
- To personalize your experience
- To ensure platform safety
- To communicate with you

## Data Protection
We implement industry-standard security measures to protect your data.

## Your Rights
You have the right to:
- Access your data
- Correct your data
- Delete your data
- Export your data
`;

export default function Privacy() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-purple-200">
            Learn how we protect your data and respect your privacy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-purple-900/30 backdrop-blur-sm rounded-xl text-center">
            <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Data Protection</h3>
            <p className="text-purple-200">Your data is encrypted and securely stored</p>
          </div>

          <div className="p-6 bg-purple-900/30 backdrop-blur-sm rounded-xl text-center">
            <Lock className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Secure Access</h3>
            <p className="text-purple-200">Control who can see your information</p>
          </div>

          <div className="p-6 bg-purple-900/30 backdrop-blur-sm rounded-xl text-center">
            <Eye className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Transparency</h3>
            <p className="text-purple-200">Clear information about data usage</p>
          </div>
        </div>

        <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-8">
          <article className="prose prose-invert max-w-none">
            <Markdown>{privacyContent}</Markdown>
          </article>
        </div>
      </div>
    </div>
  );
}