"use client"

import React, { useState } from 'react';
import { Cloud, Info } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { motion } from 'framer-motion';

const UpdateMetadataContent = () => {
  const [useLogoUrl, setUseLogoUrl] = useState(false);
  const [tokenAddress, setTokenAddress] = useState('');
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [decimals, setDecimals] = useState('');
  const [description, setDescription] = useState('');
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoUrl, setLogoUrl] = useState('');

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setLogoFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Implement the metadata update logic here
    console.log('Updating metadata:', {
      tokenAddress,
      tokenName,
      tokenSymbol,
      decimals,
      description,
      logo: useLogoUrl ? logoUrl : logoFile
    });
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
          <Info className="h-8 w-8 text-white" />
        </motion.div>
        <h1 className="text-4xl font-bold mb-4">Update Metadata</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Modify your token&apos;s information and keep it up to date.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Token Information</CardTitle>
            <CardDescription>Enter the updated details for your token.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="token-address">Token Address*</Label>
              <Input
                id="token-address"
                placeholder="Enter token address"
                value={tokenAddress}
                onChange={(e) => setTokenAddress(e.target.value)}
                className="bg-gray-50 dark:bg-gray-800"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Logo</Label>
              {!useLogoUrl ? (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <Cloud className="mx-auto h-12 w-12 text-gray-400" />
                  <label htmlFor="logo-upload" className="cursor-pointer">
                    <span className="mt-2 block text-sm font-semibold text-blue-600">Upload token logo</span>
                    <Input
                      id="logo-upload"
                      type="file"
                      className="hidden"
                      onChange={handleLogoUpload}
                      accept="image/*"
                    />
                  </label>
                  <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                </div>
              ) : (
                <Input
                  placeholder="Enter logo URL"
                  value={logoUrl}
                  onChange={(e) => setLogoUrl(e.target.value)}
                  className="bg-gray-50 dark:bg-gray-800"
                />
              )}
              <div className="flex items-center space-x-2">
                <Switch
                  id="use-logo-url"
                  checked={useLogoUrl}
                  onCheckedChange={setUseLogoUrl}
                />
                <Label htmlFor="use-logo-url">Use logo URL</Label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="token-name">Token Name*</Label>
                <Input
                  id="token-name"
                  value={tokenName}
                  onChange={(e) => setTokenName(e.target.value)}
                  className="bg-gray-50 dark:bg-gray-800"
                  required
                />
              </div>
              <div>
                <Label htmlFor="token-symbol">Token Symbol*</Label>
                <Input
                  id="token-symbol"
                  value={tokenSymbol}
                  onChange={(e) => setTokenSymbol(e.target.value)}
                  className="bg-gray-50 dark:bg-gray-800"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="decimals">Decimals*</Label>
              <Input
                id="decimals"
                type="number"
                value={decimals}
                onChange={(e) => setDecimals(e.target.value)}
                className="bg-gray-50 dark:bg-gray-800"
                required
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-gray-50 dark:bg-gray-800"
                rows={4}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Update Metadata
            </Button>
          </CardFooter>
        </Card>
      </form>

      <Alert className="mt-8 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
        <Info className="h-4 w-4" />
        <AlertTitle>Service Fee</AlertTitle>
        <AlertDescription>
          <p className="font-semibold">Current fee: 2 APT</p>
        </AlertDescription>
      </Alert>

      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>&copy; 2023 APTCoins. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UpdateMetadataContent;