﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.FINAL
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Согласие на опд.
    /// </summary>
    // *** Start programmer edit section *** (СогласиеНаОпд CustomAttributes)

    // *** End programmer edit section *** (СогласиеНаОпд CustomAttributes)
    [AutoAltered()]
    [Caption("Согласие на опд")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СогласиеНаОпдE", new string[] {
            "Номер as \'Номер\'",
            "Дата as \'Дата составления\'",
            "Сотрудники as \'Сотрудники\'",
            "Сотрудники.Фамилия as \'Фамилия\'",
            "Сотрудники.Имя as \'Имя\'",
            "Сотрудники.Отчество as \'Отчество\'",
            "Сотрудники.СерияП as \'Серия паспорта\'",
            "Сотрудники.НомерП as \'Номер паспорта\'",
            "Подпись as \'Подпись\'",
            "Отправлено as \'Отправлено\'"}, Hidden=new string[] {
            "Сотрудники.Фамилия"})]
    [MasterViewDefineAttribute("СогласиеНаОпдE", "Сотрудники", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Фамилия")]
    [View("СогласиеНаОпдL", new string[] {
            "Номер as \'Номер\'",
            "Дата as \'Дата согласия\'",
            "Сотрудники.Фамилия as \'Фамилия\'",
            "Сотрудники.Имя as \'Имя\'",
            "Сотрудники.Отчество as \'Отчество\'",
            "Подпись as \'Подпись\'",
            "Отправлено as \'Отправлено\'"})]
    public class СогласиеНаОпд : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомер;
        
        private System.DateTime fДата = System.DateTime.Now;
        
        private bool fПодпись = false;
        
        private bool fОтправлено = false;
        
        private IIS.FINAL.Сотрудники fСотрудники;
        
        // *** Start programmer edit section *** (СогласиеНаОпд CustomMembers)

        // *** End programmer edit section *** (СогласиеНаОпд CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (СогласиеНаОпд.Дата CustomAttributes)

        // *** End programmer edit section *** (СогласиеНаОпд.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (СогласиеНаОпд.Дата Get start)

                // *** End programmer edit section *** (СогласиеНаОпд.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (СогласиеНаОпд.Дата Get end)

                // *** End programmer edit section *** (СогласиеНаОпд.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СогласиеНаОпд.Дата Set start)

                // *** End programmer edit section *** (СогласиеНаОпд.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (СогласиеНаОпд.Дата Set end)

                // *** End programmer edit section *** (СогласиеНаОпд.Дата Set end)
            }
        }
        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (СогласиеНаОпд.Номер CustomAttributes)

        // *** End programmer edit section *** (СогласиеНаОпд.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (СогласиеНаОпд.Номер Get start)

                // *** End programmer edit section *** (СогласиеНаОпд.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (СогласиеНаОпд.Номер Get end)

                // *** End programmer edit section *** (СогласиеНаОпд.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СогласиеНаОпд.Номер Set start)

                // *** End programmer edit section *** (СогласиеНаОпд.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (СогласиеНаОпд.Номер Set end)

                // *** End programmer edit section *** (СогласиеНаОпд.Номер Set end)
            }
        }
        
        /// <summary>
        /// Отправлено.
        /// </summary>
        // *** Start programmer edit section *** (СогласиеНаОпд.Отправлено CustomAttributes)

        // *** End programmer edit section *** (СогласиеНаОпд.Отправлено CustomAttributes)
        public virtual bool Отправлено
        {
            get
            {
                // *** Start programmer edit section *** (СогласиеНаОпд.Отправлено Get start)

                // *** End programmer edit section *** (СогласиеНаОпд.Отправлено Get start)
                bool result = this.fОтправлено;
                // *** Start programmer edit section *** (СогласиеНаОпд.Отправлено Get end)

                // *** End programmer edit section *** (СогласиеНаОпд.Отправлено Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СогласиеНаОпд.Отправлено Set start)

                // *** End programmer edit section *** (СогласиеНаОпд.Отправлено Set start)
                this.fОтправлено = value;
                // *** Start programmer edit section *** (СогласиеНаОпд.Отправлено Set end)

                // *** End programmer edit section *** (СогласиеНаОпд.Отправлено Set end)
            }
        }
        
        /// <summary>
        /// Подпись.
        /// </summary>
        // *** Start programmer edit section *** (СогласиеНаОпд.Подпись CustomAttributes)

        // *** End programmer edit section *** (СогласиеНаОпд.Подпись CustomAttributes)
        public virtual bool Подпись
        {
            get
            {
                // *** Start programmer edit section *** (СогласиеНаОпд.Подпись Get start)

                // *** End programmer edit section *** (СогласиеНаОпд.Подпись Get start)
                bool result = this.fПодпись;
                // *** Start programmer edit section *** (СогласиеНаОпд.Подпись Get end)

                // *** End programmer edit section *** (СогласиеНаОпд.Подпись Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СогласиеНаОпд.Подпись Set start)

                // *** End programmer edit section *** (СогласиеНаОпд.Подпись Set start)
                this.fПодпись = value;
                // *** Start programmer edit section *** (СогласиеНаОпд.Подпись Set end)

                // *** End programmer edit section *** (СогласиеНаОпд.Подпись Set end)
            }
        }
        
        /// <summary>
        /// Согласие на опд.
        /// </summary>
        // *** Start programmer edit section *** (СогласиеНаОпд.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (СогласиеНаОпд.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.FINAL.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (СогласиеНаОпд.Сотрудники Get start)

                // *** End programmer edit section *** (СогласиеНаОпд.Сотрудники Get start)
                IIS.FINAL.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (СогласиеНаОпд.Сотрудники Get end)

                // *** End programmer edit section *** (СогласиеНаОпд.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СогласиеНаОпд.Сотрудники Set start)

                // *** End programmer edit section *** (СогласиеНаОпд.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (СогласиеНаОпд.Сотрудники Set end)

                // *** End programmer edit section *** (СогласиеНаОпд.Сотрудники Set end)
            }
        }
        
        // *** Start programmer edit section *** (СогласиеНаОпд.Отправить CustomAttributes)

        // *** End programmer edit section *** (СогласиеНаОпд.Отправить CustomAttributes)
        [ICSSoft.STORMNET.AccessType(ICSSoft.STORMNET.AccessType.none)]
        public virtual void Отправить()
        {
            // *** Start programmer edit section *** (СогласиеНаОпд.Отправить method implementation)
            return;
            // *** End programmer edit section *** (СогласиеНаОпд.Отправить method implementation)
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СогласиеНаОпдE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СогласиеНаОпдE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СогласиеНаОпдE", typeof(IIS.FINAL.СогласиеНаОпд));
                }
            }
            
            /// <summary>
            /// "СогласиеНаОпдL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СогласиеНаОпдL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СогласиеНаОпдL", typeof(IIS.FINAL.СогласиеНаОпд));
                }
            }
        }
    }
}
