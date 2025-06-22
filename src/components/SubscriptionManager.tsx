
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
import { VIDEO_MAKER_TYPES } from '@/constants/videoMakers';

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

  const handleVideoMakerChange = (value: string) => {
    setSelectedVideoMaker(value);
    
    if (value.includes('goanimate')) {
      toast({
        title: "Premium Video Maker Selected",
        description: "This GoAnimate video maker is built with modern TypeScript and CSS, fully compatible with iPad and all modern browsers!",
        variant: "default",
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
          <SheetTitle>Manage GoPlus Subscription</SheetTitle>
          <SheetDescription>
            {isSubscribed 
              ? `Your GoPlus subscription is active. ${trialDaysRemaining ? `Trial ends in ${trialDaysRemaining} days.` : ''}`
              : 'Upgrade to GoPlus to access premium features!'}
          </SheetDescription>
        </SheetHeader>
        
        <div className="py-6 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Video Maker Style</h3>
            <p className="text-sm text-gray-500">
              Choose which animation style to use. All premium video makers are built with modern TypeScript and CSS.
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
                    {type.name} {type.isPremium && !isSubscribed ? '(GoPlus)' : ''}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {!isSubscribed && (
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-md border-2 border-orange-200">
              <h4 className="font-medium text-orange-800">🎬 GoPlus Premium Features</h4>
              <ul className="text-sm text-orange-700 mt-2 space-y-1">
                <li>• Access to GoAnimate video makers</li>
                <li>• Premium backgrounds and characters</li>
                <li>• Built with modern TypeScript & CSS</li>
                <li>• Full iPad compatibility</li>
                <li>• No watermarks on exported videos</li>
              </ul>
            </div>
          )}
          
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Billing Management</h3>
            <p className="text-sm text-gray-500">
              Manage your GoPlus subscription details
            </p>
            
            {isSubscribed ? (
              <div className="space-y-2">
                <CustomButton 
                  variant="outline" 
                  className="w-full"
                  onClick={() => console.log("Cancel GoPlus subscription")}
                >
                  Cancel GoPlus Subscription
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
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                onClick={() => console.log("Subscribe to GoPlus now")}
              >
                Subscribe to GoPlus Now
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
              className="bg-orange-500 hover:bg-orange-600"
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
