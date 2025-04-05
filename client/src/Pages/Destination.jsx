import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Separator } from './ui/separator';
import { ScrollArea } from './ui/scroll-area';
import { MapPin, Utensils, Camera, Landmark, Calendar, X } from 'lucide-react';
import { useToast } from './ui/use-toast';

interface Location {
  name: string;
  coordinates: [number, number]; // [longitude, latitude]
}

interface DestinationInfoProps {
  location: Location | null;
  onFilterSelect: (filters: string[]) => void;
  onClose: () => void;
}

interface DestinationData {
  description: string;
  attractions: string[];
  food: string[];
  activities: string[];
  bestTimeToVisit: string;
}

const travelerTypes: { id: string; label: string }[] = [
  { id: 'solo', label: 'Solo Traveler' },
  { id: 'solo-female', label: 'Solo Female Traveler' },
  { id: 'couple', label: 'Couple / Honeymoon' },
  { id: 'family', label: 'Family with Kids' },
  { id: 'budget', label: 'Budget Traveler' },
  { id: 'luxury', label: 'Luxury Traveler' },
];

const getDestinationInfo = (location: string): DestinationData => {
  return {
    description: `${location} is a beautiful destination with rich culture, stunning landscapes, and unforgettable experiences waiting for you. From local cuisine to historical landmarks, this place has something for every type of traveler.`,
    attractions: [
      'Historical City Center',
      'Cultural Museum',
      'Famous Local Market',
      'Nature Reserve',
    ],
    food: [
      'Traditional Local Cuisine',
      'Street Food Specialties',
      'Fine Dining Options',
      'Vegetarian-Friendly Restaurants',
    ],
    activities: [
      'Guided Walking Tours',
      'Adventure Sports',
      'Cultural Performances',
      'Local Workshops',
    ],
    bestTimeToVisit:
      'Spring and Fall offer the most pleasant weather with fewer crowds.',
  };
};

const DestinationInfo: React.FC<DestinationInfoProps> = ({
  location,
  onFilterSelect,
  onClose,
}) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  if (!location) return null;

  const destinationInfo = getDestinationInfo(location.name);

  const handleFilterChange = (filterId: string, checked: boolean) => {
    setSelectedFilters((prev) =>
      checked ? [...prev, filterId] : prev.filter((id) => id !== filterId)
    );
  };

  const handleApplyFilters = () => {
    if (selectedFilters.length === 0) {
      toast({
        title: 'No filters selected',
        description:
          'Please select at least one traveler type to compare experiences',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      onFilterSelect(selectedFilters);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className="w-full max-w-md animate-fade-in">
      <CardHeader className="relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2"
          onClick={onClose}
        >
          <X size={18} />
        </Button>
        <CardTitle className="text-xl flex items-center gap-2">
          <MapPin className="h-5 w-5 text-terracotta" />
          {location.name}
        </CardTitle>
        <CardDescription>
          {location.coordinates[1].toFixed(4)}, {location.coordinates[0].toFixed(4)}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <p className="text-sm mb-4">{destinationInfo.description}</p>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Landmark className="h-4 w-4 text-teal" />
              <h3 className="font-medium">Top Attractions</h3>
            </div>
            <ul className="text-sm pl-6 list-disc">
              {destinationInfo.attractions.map((attraction, i) => (
                <li key={i}>{attraction}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Utensils className="h-4 w-4 text-teal" />
              <h3 className="font-medium">Food & Cuisine</h3>
            </div>
            <ul className="text-sm pl-6 list-disc">
              {destinationInfo.food.map((food, i) => (
                <li key={i}>{food}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Camera className="h-4 w-4 text-teal" />
              <h3 className="font-medium">Activities</h3>
            </div>
            <ul className="text-sm pl-6 list-disc">
              {destinationInfo.activities.map((activity, i) => (
                <li key={i}>{activity}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-teal" />
              <h3 className="font-medium">Best Time to Visit</h3>
            </div>
            <p className="text-sm">{destinationInfo.bestTimeToVisit}</p>
          </div>
        </ScrollArea>

        <Separator className="my-4" />

        <div>
          <h3 className="text-sm font-medium mb-3">
            Compare experiences by traveler type:
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {travelerTypes.map((type) => (
              <div key={type.id} className="flex items-center space-x-2">
                <Checkbox
                  id={type.id}
                  onCheckedChange={(checked: boolean | 'indeterminate') =>
                    handleFilterChange(type.id, checked === true)
                  }
                />
                <label htmlFor={type.id} className="text-sm cursor-pointer">
                  {type.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          className="w-full bg-teal hover:bg-teal-dark"
          disabled={isLoading}
          onClick={handleApplyFilters}
        >
          {isLoading ? 'Loading...' : 'Compare Experiences'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DestinationInfo;
