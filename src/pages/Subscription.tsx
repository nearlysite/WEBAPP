import React from 'react';
import { motion } from 'framer-motion';
import SubscriptionCard from '../components/SubscriptionCard';
import { subscriptionPlans } from '../lib/data';
import toast from 'react-hot-toast';

export default function Subscription() {
  const handleSubscribe = (type: string) => {
    if (type === 'free') {
      toast.success('Welcome to Nearly!');
    } else {
      toast.loading('Redirecting to payment...', {
        duration: 2000,
      });
    }
  };

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h1>
        <p className="text-purple-200 max-w-2xl mx-auto">
          Select the perfect plan for your needs. Upgrade anytime to unlock more features and possibilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {subscriptionPlans.map((plan) => (
          <motion.div
            key={plan.type}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: plan.type === 'premium' ? 0.2 : plan.type === 'business' ? 0.4 : 0 }}
          >
            <SubscriptionCard
              type={plan.type as 'free' | 'premium' | 'business'}
              price={plan.price}
              features={plan.features}
              isPopular={plan.isPopular}
              onSubscribe={() => handleSubscribe(plan.type)}
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-white mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "Can I change plans later?",
              a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
            },
            {
              q: "Is there a contract or commitment?",
              a: "No, all paid plans are month-to-month and you can cancel anytime. No long-term contracts required."
            },
            {
              q: "What payment methods do you accept?",
              a: "We accept all major credit cards, PayPal, and Apple Pay for premium subscriptions."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-purple-900/30 backdrop-blur-sm p-6 rounded-xl text-left">
              <h3 className="text-lg font-medium text-white mb-2">{faq.q}</h3>
              <p className="text-purple-200">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}