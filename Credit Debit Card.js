const stripe = Stripe('YOUR_STRIPE_SECRET_KEY');

    const form = document.getElementById('payment-form');
    const fromAccount = document.getElementById('from-account');
    const amount = document.getElementById('amount');
    const payBtn = document.getElementById('pay-btn');
    
    payBtn.addEventListener('click', async (e) => {
      e.preventDefault();
    
      const transferData = {
        amount: parseInt(amount.value) * 100, // Convert to cents
        currency: 'usd',
        source: fromAccount.value,
        destination: 'YOUR_STRIPE_ACCOUNT_ID', // Replace with your Stripe account ID
      };
    
      try {
        const transfer = await stripe.transfers.create(transferData);
        console.log(transfer.id);
        alert('Transfer successful!');
      } catch (error) {
        console.error(error.message);
        alert('Transfer failed!');
      }
    });