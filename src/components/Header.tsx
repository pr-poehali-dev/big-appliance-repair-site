import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Wrench" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold text-foreground">РемонтТех</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-sm hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('services')} className="text-sm hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('prices')} className="text-sm hover:text-primary transition-colors">Цены</button>
            <button onClick={() => scrollToSection('guarantees')} className="text-sm hover:text-primary transition-colors">Гарантии</button>
            <button onClick={() => scrollToSection('reviews')} className="text-sm hover:text-primary transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm hover:text-primary transition-colors">Контакты</button>
          </nav>
          <Button onClick={() => scrollToSection('form')} className="hidden md:flex">
            Вызвать мастера
          </Button>
        </div>
      </div>
    </header>
  );
}
