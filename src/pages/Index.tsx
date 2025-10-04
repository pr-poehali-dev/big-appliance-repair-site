import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    appliance: '',
    problem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка принята!",
      description: "Мастер свяжется с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', appliance: '', problem: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
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

      <section id="hero" className="relative bg-gradient-to-br from-primary/10 to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
              Профессиональный ремонт<br />бытовой техники
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Более 15 лет опыта. Гарантия на все виды работ. Выезд мастера в день обращения
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => scrollToSection('form')} size="lg" className="text-lg px-8">
                Вызвать мастера
              </Button>
              <Button onClick={() => scrollToSection('services')} variant="outline" size="lg" className="text-lg px-8">
                Наши услуги
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                <div className="text-sm text-muted-foreground">ремонтов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ремонтируем все виды крупной бытовой техники с гарантией качества
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="WashingMachine" size={32} className="text-primary" />
                </div>
                <CardTitle>Стиральные машины</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Диагностика и ремонт всех типов стиральных машин любых производителей
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Refrigerator" size={32} className="text-primary" />
                </div>
                <CardTitle>Холодильники</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Устранение неисправностей холодильного оборудования, замена компрессоров
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="CookingPot" size={32} className="text-primary" />
                </div>
                <CardTitle>Плиты и духовки</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Ремонт электрических и газовых плит, встраиваемых духовых шкафов
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Sparkles" size={32} className="text-primary" />
                </div>
                <CardTitle>Посудомоечные машины</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Профессиональный ремонт посудомоечных машин всех марок
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="form" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Вызвать мастера</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      placeholder="Иван Петров"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="appliance">Тип техники</Label>
                    <Select value={formData.appliance} onValueChange={(value) => setFormData({ ...formData, appliance: value })} required>
                      <SelectTrigger id="appliance">
                        <SelectValue placeholder="Выберите тип техники" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="washing">Стиральная машина</SelectItem>
                        <SelectItem value="fridge">Холодильник</SelectItem>
                        <SelectItem value="oven">Плита/Духовка</SelectItem>
                        <SelectItem value="dishwasher">Посудомоечная машина</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="problem">Описание проблемы</Label>
                    <Textarea
                      id="problem"
                      placeholder="Опишите неисправность..."
                      value={formData.problem}
                      onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Цены на услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Честные цены без скрытых платежей. Диагностика бесплатная при ремонте у нас
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="WashingMachine" size={24} className="text-primary" />
                  Стиральные машины
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Диагностика</span>
                  <span className="font-semibold">Бесплатно</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Замена подшипников</span>
                  <span className="font-semibold">от 2500₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ремонт электроники</span>
                  <span className="font-semibold">от 1800₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Замена насоса</span>
                  <span className="font-semibold">от 1500₽</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Refrigerator" size={24} className="text-primary" />
                  Холодильники
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Диагностика</span>
                  <span className="font-semibold">Бесплатно</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Заправка фреоном</span>
                  <span className="font-semibold">от 2000₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Замена компрессора</span>
                  <span className="font-semibold">от 3500₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Замена термостата</span>
                  <span className="font-semibold">от 1200₽</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="CookingPot" size={24} className="text-primary" />
                  Плиты и духовки
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Диагностика</span>
                  <span className="font-semibold">Бесплатно</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Замена конфорки</span>
                  <span className="font-semibold">от 1000₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ремонт духовки</span>
                  <span className="font-semibold">от 1800₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Замена переключателей</span>
                  <span className="font-semibold">от 800₽</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Sparkles" size={24} className="text-primary" />
                  Посудомоечные машины
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Диагностика</span>
                  <span className="font-semibold">Бесплатно</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Чистка фильтров</span>
                  <span className="font-semibold">от 800₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Замена насоса</span>
                  <span className="font-semibold">от 2000₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ремонт электроники</span>
                  <span className="font-semibold">от 1500₽</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="guarantees" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Наши гарантии</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Мы уверены в качестве нашей работы и предоставляем официальные гарантии
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <CardTitle>Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  До 12 месяцев гарантии на все виды выполненных работ и замененные запчасти
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <CardTitle>Быстрый выезд</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Выезд мастера в течение 2 часов после звонка. Работаем без выходных с 8:00 до 22:00
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <CardTitle>Опытные мастера</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Все наши специалисты имеют сертификаты и опыт работы от 5 лет
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Более 5000 довольных клиентов по всей Москве
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">АМ</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">Анна Михайлова</CardTitle>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Быстро отремонтировали стиральную машину. Мастер приехал в тот же день, диагностика действительно бесплатная. Работой очень довольна!
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">ДС</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">Дмитрий Соколов</CardTitle>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Профессиональный подход! Отремонтировали холодильник качественно, дали гарантию на год. Цены адекватные, рекомендую!
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">ЕК</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">Елена Козлова</CardTitle>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Спасибо за оперативность! Посудомойка сломалась вечером, утром уже работала. Мастер вежливый, все объяснил и показал.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Свяжитесь с нами удобным способом
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={32} className="text-primary" />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+74951234567" className="text-lg font-semibold text-primary hover:underline">
                  +7 (495) 123-45-67
                </a>
                <p className="text-sm text-muted-foreground mt-2">Ежедневно с 8:00 до 22:00</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={32} className="text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@remonttech.ru" className="text-lg font-semibold text-primary hover:underline">
                  info@remonttech.ru
                </a>
                <p className="text-sm text-muted-foreground mt-2">Ответим в течение часа</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={32} className="text-primary" />
                </div>
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">г. Москва</p>
                <p className="text-sm text-muted-foreground mt-2">Выезд по всем районам</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Wrench" size={24} />
            <span className="text-xl font-bold">РемонтТех</span>
          </div>
          <p className="text-sm text-primary-foreground/70 mb-4">
            Профессиональный ремонт бытовой техники с 2009 года
          </p>
          <p className="text-xs text-primary-foreground/50">
            © 2024 РемонтТех. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
