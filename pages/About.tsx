export const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <div className="relative fade-in">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Denis Photographer" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-terracotta-100 rounded-full -z-10" />
          <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-terracotta-600/30 rounded-full -z-10" />
        </div>

        {/* Text Side */}
        <div className="space-y-8 fade-in" style={{ animationDelay: '0.2s' }}>
          <div>
            <span className="text-terracotta-600 font-medium uppercase tracking-wider text-sm mb-2 block">Обо мне</span>
            <h1 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
              Привет, я Денис. <br />
              <span className="text-stone-500 italic">Я ловлю эмоции.</span>
            </h1>
          </div>

          <div className="space-y-4 text-stone-600 leading-relaxed font-light text-lg">
            <p>
              Фотография для меня — это не просто работа с техникой, это способ остановить время. Я верю, что каждый момент уникален, и моя задача — сохранить его для вас таким, каким он был: живым, искренним и красивым.
            </p>
            <p>
              В моей работе я придерживаюсь стиля "Quiet Luxury" — элегантного минимализма, где главное внимание уделяется вам и вашим чувствам, а не лишним деталям.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-stone-200">
            <div>
              <div className="text-4xl font-serif text-terracotta-600 mb-1">7+</div>
              <div className="text-sm text-stone-500 uppercase tracking-wide">Лет опыта</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-terracotta-600 mb-1">400+</div>
              <div className="text-sm text-stone-500 uppercase tracking-wide">Съемок</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-terracotta-600 mb-1">15</div>
              <div className="text-sm text-stone-500 uppercase tracking-wide">Наград</div>
            </div>
          </div>
          
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" 
            alt="Signature" 
            className="h-12 opacity-50 mt-4"
          />
        </div>
      </div>
    </div>
  );
};
