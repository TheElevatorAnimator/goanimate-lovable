import React, { useState, useEffect } from 'react';
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import CustomButton from './ui/CustomButton';
import { VIDEO_MAKER_TYPES } from '@/utils/animationUtils';

interface SubscriptionManagerProps {
  isSubscribed: boolean;
  isOpen: boolean;
  onClose: () => void;
  onVideoMakerChange: (videoMaker: string) => void;
  currentVideoMaker?: string;
  trialDaysRemaining?: number;
}

const SubscriptionManager: React.FC<SubscriptionManagerProps> = ({
  isSubscribed,
  isOpen,
  onClose,
  onVideoMakerChange,
  currentVideoMaker = 'plotagon',
  trialDaysRemaining,
}) => {
  const [selectedVideoMaker, setSelectedVideoMaker] = useState<string>(currentVideoMaker);
  const { toast } = useToast();

  const isPuffinBrowser = () => {
    return /Puffin/i.test(navigator.userAgent);
  };

  const handleVideoMakerChange = (value: string) => {
    setSelectedVideoMaker(value);
    
    if (value.includes('goanimate') && !isPuffinBrowser()) {
      toast({
        title: "Browser Compatibility Warning",
        description: "GoAnimate video makers require Puffin Browser to work properly. Please switch to Puffin Browser for the best experience.",
        variant: "destructive",
      });
    }
  };

  const handleSave = () => {
    onVideoMakerChange(selectedVideoMaker);
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Manage Subscription</SheetTitle>
          <SheetDescription>
            {isSubscribed 
              ? `Your subscription is active. ${trialDaysRemaining ? `Trial ends in ${trialDaysRemaining} days.` : ''}`
              : 'Upgrade to access premium features!'}
          </SheetDescription>
        </SheetHeader>
        
        <div className="py-6 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Video Maker Style</h3>
            <p className="text-sm text-gray-500">
              Choose which animation style to use
            </p>
            
            <Select 
              value={selectedVideoMaker} 
              onValueChange={handleVideoMakerChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select video maker" />
              </SelectTrigger>
              <SelectContent>
                {VIDEO_MAKER_TYPES.map(type => (
                  <SelectItem 
                    key={type.id} 
                    value={type.id}
                    disabled={type.isPremium && !isSubscribed}
                  >
                    {type.name} {type.isPremium && !isSubscribed ? '(Premium)' : ''}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {!isSubscribed && (
            <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
              <h4 className="font-medium text-yellow-800">Premium Features</h4>
              <p className="text-sm text-yellow-700 mt-1">
                Subscribe to access GoAnimate video makers and premium backgrounds!
              </p>
            </div>
          )}
          
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Billing Management</h3>
            <p className="text-sm text-gray-500">
              Manage your subscription details
            </p>
            
            {isSubscribed ? (
              <div className="space-y-2">
                <CustomButton 
                  variant="outline" 
                  className="w-full"
                  onClick={() => console.log("Cancel subscription")}
                >
                  Cancel Subscription
                </CustomButton>
                <CustomButton 
                  variant="outline" 
                  className="w-full"
                  onClick={() => console.log("Update payment method")}
                >
                  Update Payment Method
                </CustomButton>
              </div>
            ) : (
              <CustomButton 
                variant="primary" 
                className="w-full"
                onClick={() => console.log("Subscribe now")}
              >
                Subscribe Now
              </CustomButton>
            )}
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <CustomButton 
              variant="outline" 
              onClick={onClose}
            >
              Cancel
            </CustomButton>
            <CustomButton 
              variant="primary" 
              onClick={handleSave}
            >
              Save Changes
            </CustomButton>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SubscriptionManager;
