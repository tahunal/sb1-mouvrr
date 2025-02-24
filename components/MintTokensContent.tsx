"use client"

import React, { useState } from 'react';
import { PlusCircle, Info } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const MintTokensContent = () => {
  const [tokenAddress, setTokenAddress] = useState('');
  const [mintAmount, setMintAmount] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleMint = () => {
    // Implement the actual minting logic here
    console.log('Minting tokens:', {
      tokenAddress,
      mintAmount
    });
    setIsDialogOpen(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-blue-600 p-3 rounded-lg mb-4"
        >
          <PlusCircle className="h-8 w-8 text-white" />
        </motion.div>
        <h1 className="text-4xl font-bold mb-4">Mint Aptos Tokens</h1>
        <p className="text-muted-foreground">
          Create new tokens for your Aptos project. This feature is only available for token admins.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Token Information</CardTitle>
          <CardDescription>Enter the details for token minting.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="token-address">Token Address*</Label>
            <div className="relative">
              <Input
                id="token-address"
                placeholder="Enter token address"
                value={tokenAddress}
                onChange={(e) => setTokenAddress(e.target.value)}
                className="pr-8"
                required
              />
              <Info className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <div>
            <Label htmlFor="mint-amount">Number of Tokens to Mint*</Label>
            <Input
              id="mint-amount"
              type="number"
              placeholder="Enter amount to mint"
              value={mintAmount}
              onChange={(e) => setMintAmount(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Mint Tokens
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm Token Minting</DialogTitle>
                <DialogDescription>
                  Are you sure you want to mint these tokens? This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p><strong>Token Address:</strong> {tokenAddress}</p>
                <p><strong>Amount to Mint:</strong> {mintAmount}</p>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleMint}>Confirm Minting</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>

      <Alert className="mt-8 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
        <Info className="h-4 w-4" />
        <AlertTitle>Service Fee</AlertTitle>
        <AlertDescription>
          <p>Original fee: <span className="line-through">5 APT</span></p>
          <p className="font-semibold">Current fee: 3 APT (40% discount applied)</p>
        </AlertDescription>
      </Alert>

      <footer className="mt-8 text-center text-sm text-muted-foreground">
        <p>&copy; 2023 APTCoins. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MintTokensContent;