import React from 'react';
import Markdown from 'markdown-to-jsx';
import { FileText, UserCheck, AlertTriangle } from 'lucide-react';

const termsContent = `
# Terms of Service

## Agreement to Terms
By accessing Nearly, you agree to these Terms of Service.

## Eligibility
You must be at least 18 years old to use Nearly.

## User Accounts
- You are responsible for maintaining account security
- Provide accurate and complete information
- One person, one account

## Acceptable Use
- Be respectful to others
- No harassment or abuse
- No fake profiles
- No illegal activities

## Content Guidelines
- Keep it appropriate
- Respect intellectual property
- No harmful content
- No spam

## Termination
We reserve the right to terminate accounts that violate these terms.

## Changes to Terms
We may update these terms. Check regularly for changes.
`;

export default function Terms() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-purple-200">
            Please read these terms carefully before using Nearly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-purple-900/30 backdrop-blur-sm rounded-xl text-center">
            <FileText className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Clear Terms</h3>
            <p className="text-purple-200">Simple, straightforward policies</p>
          </div>

          <div className="p-6 bg-purple-900/30 backdrop-blur-sm rounded-xl text-center">
            <UserCheck className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">User Rights</h3>
            <p className="text-purple-200">Fair and balanced user agreements</p>
          </div>

          <div className="p-6 bg-purple-900/30 backdrop-blur-sm rounded-xl text-center">
            <AlertTriangle className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Compliance</h3>
            <p className="text-purple-200">Following all applicable laws</p>
          </div>
        </div>

        <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-8">
          <article className="prose prose-invert max-w-none">
            <Markdown>{termsContent}</Markdown>
          </article>
        </div>
      </div>
    </div>
  );
}